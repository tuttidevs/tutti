from rest_framework import serializers
from .models import TuttiUser

class TuttiUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TuttiUser
        fields = ('id', 'username', 'display_name', 'email', 'password', 'date_joined')

class CreateTuttiUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TuttiUser
        fields = ('username', 'display_name', 'email', 'password')
