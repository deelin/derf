# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Role(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField(null=True, blank=True)


class Hero(models.Model):
    role = models.ForeignKey(Role)

    name = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    difficulty = models.IntegerField(default=1)

    # URLs to hero assets
    picture = models.CharField(max_length=250, null=True, blank=True) 
    icon = models.CharField(max_length=250, null=True, blank=True) 

    class Meta:
        verbose_name_plural = "Heroes"


class Ability(models.Model):
    hero = models.ForeignKey(Hero)

    name = models.CharField(max_length=100)
    description = models.TextField()
    is_ultimate = models.BooleanField(default=False)

    # URL to ability icon
    icon = models.CharField(max_length=250, null=True, blank=True) 

    # URL to ability video
    video = models.CharField(max_length=250, null=True, blank=True) 

    class Meta:
        verbose_name_plural = "Abilities"


class Emote(models.Model):
    hero = models.ForeignKey(Hero)

    name = models.CharField(max_length=100)
    description = models.TextField()

    # URL to emote video
    video = models.CharField(max_length=250, null=True, blank=True) 
