# Generated by Django 5.0 on 2023-12-31 22:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lawyers', '0002_lawyers'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250, verbose_name='Name')),
            ],
        ),
        migrations.AddField(
            model_name='lawyer',
            name='experience',
            field=models.TextField(default='N/A'),
        ),
        migrations.AddField(
            model_name='lawyer',
            name='office_location',
            field=models.CharField(default='N/A', max_length=200),
        ),
        migrations.AddField(
            model_name='lawyer',
            name='personal_statement',
            field=models.TextField(default='N/A'),
        ),
        migrations.AddField(
            model_name='lawyer',
            name='phone_number',
            field=models.CharField(default='N/A', max_length=20),
        ),
        migrations.AddField(
            model_name='lawyer',
            name='practice_areas',
            field=models.TextField(default='N/A'),
        ),
        migrations.AddField(
            model_name='lawyer',
            name='qualifications',
            field=models.TextField(default='N/A'),
        ),
        migrations.AddField(
            model_name='lawyer',
            name='services',
            field=models.TextField(default='N/A'),
        ),
        migrations.AddField(
            model_name='lawyer',
            name='website',
            field=models.URLField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='lawyer',
            name='email',
            field=models.EmailField(default='example@example.com', max_length=254),
        ),
        migrations.AlterField(
            model_name='lawyer',
            name='phone',
            field=models.CharField(default='N/A', max_length=20),
        ),
        migrations.AddField(
            model_name='lawyer',
            name='categories',
            field=models.ManyToManyField(related_name='lawyers', to='lawyers.category'),
        ),
    ]
