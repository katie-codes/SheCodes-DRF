
from django.db import models
from django.contrib.auth import get_user_model

class Project(models.Model):
	title = models.CharField(max_length=200)
	short_description = models.TextField(max_length=200, default='')
	description = models.TextField(max_length=None, default='')
	goal = models.IntegerField()
	image = models.URLField()
	is_open = models.BooleanField()
	date_created = models.DateTimeField()
	category = models.CharField(max_length=20, default='')
	owner = models.ForeignKey(
		get_user_model(),
		on_delete=models.CASCADE,
		related_name='owner_projects'
	)

class Pledge(models.Model):
	amount = models.IntegerField()
	comment = models.CharField(max_length=200)
	anonymous = models.BooleanField()
	project = models.ForeignKey(
		'Project',
		on_delete=models.CASCADE,
		related_name='pledges'
	)
	supporter = models.ForeignKey(
		get_user_model(),
		on_delete=models.CASCADE,
		related_name='supporter_pledges'
	)

# to access a plegde from projects its - project.pledges.all