from django.contrib.auth import views as auth_views
from django.urls import path
from .views import TuttiUserView, SignUpView, csrf

urlpatterns = [
    path('users', TuttiUserView.as_view()),
    path('csrf', csrf),
    path('auth/register', SignUpView.as_view()),
    path('auth/login', auth_views.LoginView.as_view()),
    path('auth/logout', auth_views.LogoutView.as_view()),
]
