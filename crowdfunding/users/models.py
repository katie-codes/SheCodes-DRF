from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=50,default='')
    # profile_picture = models.ImageField(upload_to='images/', null=True, blank=True,)

    def __str__(self):
        return self.username