from rest_framework import serializers

from heroes.models import Ability, Hero, Interaction


class HeroSerializer(serializers.ModelSerializer):

    role = serializers.SerializerMethodField()

    class Meta:
        model = Hero
        fields = ("id",
                  "name",
                  "description",
                  "difficulty",
                  "picture",
                  "icon",
                  "role")

    def get_role(self, hero):
        return hero.role.name


class AbilitySerializer(serializers.ModelSerializer):

    hero = HeroSerializer()

    class Meta:
        model = Ability
        fields = ("id",
                  "name",
                  "description",
                  "is_ultimate",
                  "icon",
                  "video",
                  "hero")


class InteractionSerializer(serializers.ModelSerializer):

    ability1 = AbilitySerializer()
    ability2 = AbilitySerializer()

    class Meta:
        model = Interaction
        fields = ("id",
                  "ability1",
                  "ability2",
                  "description",
                  "video")

