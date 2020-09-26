
from django.db import models
from django.contrib.auth import get_user_model

# from safedelete.models import safeDeleteModel
# from safedelete.models import HARD_DELETE_NOCASCADE
# from django.db.models import sum 

class Project(models.Model):
	title = models.CharField(max_length=200)
	description = models.TextField()
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

# class Category(models.Model):
#     cat_title = models.CharField(max_length = 200, db_index = True)
#     cat_slug = models.SlugField(max_length = 100, db_index = True)


#     def __str__(self):
# 	    return self.cat_title

#     def get_absolute_url(self):
# 	    return reverse('category_detail', kwargs={'cat_slug':self.cat_slug})

#     class Meta:
# 	    verbose_name = 'Category'
# 	    verbose_name_plural = 'Categories'