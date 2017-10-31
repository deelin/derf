from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from .views import AbilityView, HeroView, InteractionView


urlpatterns = [
    url(r'ability/$', AbilityView.as_view()),
    url(r'hero/$', HeroView.as_view()),
    url(r'interaction/$', InteractionView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
