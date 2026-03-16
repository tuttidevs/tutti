from django.urls import path
from .views import TuttiUserView, CreateTuttiUserView

urlpatterns = [
    path('users', TuttiUserView.as_view()),
    path('auth/register', CreateTuttiUserView.as_view()),
]
