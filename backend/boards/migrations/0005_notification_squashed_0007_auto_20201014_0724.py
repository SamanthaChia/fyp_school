# Generated by Django 3.1.2 on 2020-10-14 07:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    replaces = [('boards', '0005_notification'), ('boards', '0006_auto_20201014_0723'), ('boards', '0007_auto_20201014_0724')]

    dependencies = [
        ('boards', '0004_auto_20200924_0558'),
        ('contenttypes', '0002_remove_content_type_name'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('verb', models.CharField(max_length=255)),
                ('unread', models.BooleanField(db_index=True, default=True)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('target_id', models.PositiveIntegerField(blank=True, null=True)),
                ('action_object_id', models.PositiveIntegerField(blank=True, null=True)),
                ('action_object_model', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='action_object_obj', to='contenttypes.contenttype')),
                ('actor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='actions', to=settings.AUTH_USER_MODEL)),
                ('target_model', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='target_obj', to='contenttypes.contenttype')),
            ],
        ),
        migrations.RenameField(
            model_name='comment',
            old_name='user',
            new_name='author',
        ),
        migrations.RemoveField(
            model_name='comment',
            name='description',
        ),
        migrations.AddField(
            model_name='comment',
            name='body',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
