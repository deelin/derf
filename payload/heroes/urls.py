from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^(?P<hero_id>\d+)', views.main),
]
