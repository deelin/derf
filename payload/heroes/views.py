# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render


def main(request):
    return render('heroes/main.html')
