# Generated by Django 4.2.1 on 2023-06-11 04:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0005_alter_account_user_rename_user_account_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]