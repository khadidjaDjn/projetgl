# Generated by Django 5.0 on 2024-01-04 22:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lawyers', '0011_lawyer_user_alter_lawyer_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='rating',
            field=models.IntegerField(choices=[('1', 1), ('2', 2), ('3', 3), ('4', 4), ('5', 5)], default=0, verbose_name='Stars'),
        ),
        migrations.AlterField(
            model_name='review',
            name='timestamp',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
