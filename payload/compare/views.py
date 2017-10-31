# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

def compare(request):
    return render(request, 'compare/index.html')
