# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import Ability, Emote, Hero, Interaction, Role


admin.site.register(Ability)
admin.site.register(Emote)
admin.site.register(Hero)
admin.site.register(Interaction)
admin.site.register(Role)
