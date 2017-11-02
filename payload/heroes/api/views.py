from rest_framework import generics, mixins, status
from rest_framework.response import Response

from heroes.models import Ability, Hero, Interaction

from .serializers import (AbilitySerializer,
                          HeroSerializer,
                          InteractionSerializer)


class AbilityView(mixins.ListModelMixin, generics.GenericAPIView):
    """
    List view for abilities. Allow for filtering by hero id
    """
    serializer_class = AbilitySerializer

    def get_queryset(self):
        import time
        time.sleep(1)
        hero_id = self.request.query_params.get('hero_id', '')

        abilities = Ability.objects.filter(icon__isnull=False)
        if hero_id:
            return abilities.filter(hero_id=hero_id)
        return abilities

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class HeroView(mixins.ListModelMixin, generics.GenericAPIView):
    """
    List view for heroes
    """
    queryset = Hero.objects.all().order_by('name')
    serializer_class = HeroSerializer

    def get(self, request, *args, **kwargs):
        import time
        time.sleep(1)
        return self.list(request, *args, **kwargs)


class InteractionView(mixins.RetrieveModelMixin, generics.GenericAPIView):
    """
    Interaction API that only allows for GET
    """
    queryset = Interaction.objects.all()
    serializer_class = InteractionSerializer

    def get(self, request, format=None):
        import time
        time.sleep(1)
        ability1 = request.GET.get('ability1', '')
        ability2 = request.GET.get('ability2', '')

        if not ability1 or not ability2:
            return Response('Bad Request', status=status.HTTP_400_BAD_REQUEST)

        qs = self.queryset
        interaction = qs.filter(ability1_id=ability1,
                                ability2_id=ability2).last()
        if not interaction:
            return Response('Not Found', status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(interaction)
        return Response(serializer.data)
