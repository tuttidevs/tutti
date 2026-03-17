from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView
from django.middleware.csrf import get_token
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import TuttiUserSerializer, CreateTuttiUserSerializer
from .models import TuttiUser

# Create your views here.
class TuttiUserView(generics.ListAPIView):
    queryset = TuttiUser.objects.all()
    serializer_class = TuttiUserSerializer

class SignUpView(CreateView):
    form_class = UserCreationForm

def csrf(request):
    return JsonResponse({"csrfToken": get_token(request)})

# class CreateTuttiUserView(APIView):
#     serializer_class = CreateTuttiUserSerializer

#     def post(self, request, format=None):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             username = serializer.data.get("username")
#             display_name = serializer.data.get("display_name")
#             email = serializer.data.get("email")
#             password = serializer.data.get("password")
#             queryset = TuttiUser.objects.filter(username=username)
#             if queryset.exists():
#                 return Response()
#             else:
#                 user = TuttiUser.objects.create_user(username, email, password=password)
#                 user.save()
#                 return Response(TuttiUserSerializer(user).data, status=status.HTTP_200_OK)

#         # if not self.request.session.exists(self.request.session.session_key):
#         #     self.request.session.create()

#         # serializer = self.serializer_class(data=request.data)
#         # if serializer.is_valid():
#         #     username = serializer.data.get("username")
#         #     display_name = serializer.data.get("display_name")
#         #     email = serializer.data.get("email")
#         #     password = serializer.data.get("password")
#         #     queryset = TuttiUser.objects.filter(username=username)
#         #     if queryset.exists():
#         #         pass
#         #     else:
#         #         user = TuttiUser(username=username, display_name=display_name, email=email, password=password)
#         #         user.save()
#         #     return Response(TuttiUserSerializer(user).data, status=status.HTTP_200_OK)
