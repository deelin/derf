from rest_framework import serializers

from heroes.models import Ability, Hero, Interaction


class AbilitySerializer(serializers.ModelSerializer):

    class Meta:
        model = Ability


class HeroSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hero


class InterationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Interaction
