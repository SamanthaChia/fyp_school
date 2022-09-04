from django.contrib.contenttypes.models import ContentType
from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver

from . import models


label_colors = ["89BD9E",
            "29274C",
            "F0C987",
            "DB4C40",
            "C37D92",
            "4F6367",
            "DDCECD"]


@receiver(post_save, sender=models.Board)
def create_board_labels(sender, instance, created, **kwargs):
    if created:
        for color in label_colors:
            models.Label.objects.create(board=instance, color=color)


@receiver(post_save, sender=models.Comment)
def create_comment_notification(sender, instance, created, **kwargs):
    if created:
        for user in instance.item.assigned_to.all():
            # Notification is not created if user is the one commenting.
            if instance.author == user:  
                continue
            models.Notification.objects.create(
                actor=instance.author, recipient=user,
                verb='commented', action_object=instance, target=instance.item)


@receiver(post_delete, sender=models.Comment)
def delete_comment_notification(sender, instance, **kwargs):
    models.Notification.objects.filter(
        action_object_model=ContentType.objects.get(model='comment'),
        action_object_id=instance.id).delete()
