from django.db import models

# Create your models here.

#千人计划事实表
class thousand_talents_program(models.Model):
    name = models.CharField(max_length=20)
    birthday = models.CharField(max_length=40)
    sex = models.CharField(max_length=40)
    native_place = models.CharField(max_length=40)
    native_longitude = models.CharField(max_length=40)
    jiguan_latitude = models.CharField(max_length=40)
    organization = models.CharField(max_length=40)
    major = models.CharField(max_length=100)
    major_abbreviation = models.CharField(max_length=40)
    title_date = models.CharField(max_length=40)
    title_organization = models.CharField(max_length=40)
    school = models.CharField(max_length=40)
    graduation_time = models.CharField(max_length=40)
    province = models.CharField(max_length=40)
    former_organization = models.CharField(max_length=40)
    def __unicode__(self):
        return self.name
