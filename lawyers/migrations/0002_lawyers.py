# Generated by Django 5.0 on 2023-12-31 01:39

from django.db import migrations
   
def create_data(apps, schema_editor):
    Student = apps.get_model('lawyers', 'Lawyer')
    Student(name="Joe Silver", email="joe@email.com", document="22342342", phone="00000000").save()

class Migration(migrations.Migration):

    dependencies = [
        ('lawyers', '0001_initial'),
    ]


    operations = [
        migrations.RunPython(create_data),
    ]
   
   