# Generated by Django 3.1.1 on 2020-09-21 14:08

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=15, unique=True, validators=[django.core.validators.RegexValidator('^[a-zA-Z0-9_\\.]*$', 'Only alphanumeric characters, underscores, and periods are allowed in your username.')]),
        ),
    ]
