from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, UserManager
import string
import random

# Create your models here.
class TuttiUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=32, unique=True, null=False)
    display_name = models.CharField(max_length=64, unique=True, null=True)
    email = models.CharField(unique=True, null=False)
    password = models.CharField(null=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now_add=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    REQUIRED_FIELDS = ["password"]
    USERNAME_FIELD = "username"
    EMAIL_FIELD = "email"
    objects = UserManager()

# inbox = XREF
# outbox = XREF
# following = XREF
# followers = XREF
# liked = XREF

class Scrobble(models.Model):
    musicbrainz_id = models.CharField(max_length=36)
    user_id = models.IntegerField(null=False)
    time = models.DateTimeField(auto_now_add=True)
