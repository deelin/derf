# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from .models import Hero


def main(request, hero_id):
    hero = Hero.objects.get(id=hero_id)
    return render(request, 'heroes/main.html', {"hero": hero})
