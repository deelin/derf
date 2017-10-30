# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('heroes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Interaction',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('description', models.TextField()),
                ('video', models.CharField(max_length=250, null=True, blank=True)),
                ('ability1', models.ForeignKey(related_name='ability_initiator', to='heroes.Ability')),
                ('ability2', models.ForeignKey(related_name='ability_responder', to='heroes.Ability')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AlterModelOptions(
            name='ability',
            options={'verbose_name_plural': 'Abilities'},
        ),
        migrations.AlterModelOptions(
            name='hero',
            options={'verbose_name_plural': 'Heroes'},
        ),
    ]
