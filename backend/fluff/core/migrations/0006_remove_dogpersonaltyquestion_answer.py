# Generated by Django 4.2.3 on 2023-11-27 18:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_dogpersonalityresult_dogpersonaltyquestion'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dogpersonaltyquestion',
            name='answer',
        ),
    ]