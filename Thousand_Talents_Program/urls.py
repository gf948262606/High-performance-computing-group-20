"""Thousand_Talents_Program URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from Model import views,database

urlpatterns = [
    url(r'^dispaly$',views.display),
    url(r'^add_data$',database.add_data),
    url(r'^delete_data$',database.delete_data),
    url(r'^delete_all$', database.delete_all),
    url(r'^update_data$', database.update_data),
    url(r'^query_all$', database.query_all),
    url(r'^query$', database.query),
    url(r'^query_sex$', database.query_sex),
    url(r'^query_organization$', database.delete_data),
    url(r'^query_major$', database.add_data),
    url(r'^query_title_organization$', database.delete_data),
    url(r'^query_school$', database.add_data),
    url(r'^query_school_country$', database.delete_data),
    url(r'^query_year', database.query_year),

]
