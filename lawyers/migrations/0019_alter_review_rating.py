# Generated by Django 5.0 on 2024-01-27 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lawyers', '0018_alter_review_rating_delete_lawyer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='rating',
            field=models.IntegerField(choices=[('4', 4), ('2', 2), ('1', 1), ('3', 3), ('5', 5)], default=0, verbose_name='Stars'),
        ),
    ]
