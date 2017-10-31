from django.shortcuts import render


def home(request):
    return render(request,
                  "payload/index.html",
                  content_type="application/xhtml+xml")
