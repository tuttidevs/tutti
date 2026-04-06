from django.contrib.auth import views as auth_views
from django.urls import path
from .views import (
    CsrfView,
    CreateTuttiUserView, LoginTuttiUserView, LogoutTuttiUserView, TuttiUserSessionView,
    CreateScrobbleView, ListScrobblesView,
    TuttiUserProfileView,
    SongMetadataView, SongCoverView,
    SongMakeRecommendationView, SongRecommendationsView,
    ScrobbleLikeView, ScrobbleDislikeView,
)

urlpatterns = [
    path('csrf/', CsrfView.as_view()),
    path('auth/register/', CreateTuttiUserView.as_view()),
    path('auth/login/', LoginTuttiUserView.as_view()),
    path('auth/logout/', LogoutTuttiUserView.as_view()),
    path('auth/session/', TuttiUserSessionView.as_view()),
    path('createscrobble/', CreateScrobbleView.as_view()),
    path('user/scrobbles/', ListScrobblesView.as_view()),
    path('user/profile/', TuttiUserProfileView.as_view()),
    path('song/<int:id>/metadata/', SongMetadataView.as_view()),
    path('song/<int:id>/cover/', SongCoverView.as_view()),
    path('song/<int:id>/makerecommendation/', SongMakeRecommendationView.as_view()),
    path('song/<int:id>/recommendations/', SongRecommendationsView.as_view()),
    path('scrobble/like/', ScrobbleLikeView.as_view()),
    path('scrobble/dislike/', ScrobbleDislikeView.as_view()),
]
