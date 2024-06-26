# Generated by Django 4.2.3 on 2023-11-28 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_remove_dogpersonaltyquestion_answer'),
    ]

    operations = [
        migrations.AddField(
            model_name='dogpersonaltyquestion',
            name='answer_choice',
            field=models.CharField(choices=[('1', 'Tak'), ('0', 'Nie')], default='0', max_length=1),
        ),
        migrations.AddField(
            model_name='smarttestresult',
            name='created_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='smarttestresult',
            name='temperament',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterUniqueTogether(
            name='smarttestresult',
            unique_together={('user', 'created_at')},
        ),
    ]
