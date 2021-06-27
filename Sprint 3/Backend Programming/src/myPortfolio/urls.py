from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
	path('', views.home, name="porfolio-home"),
	path('showcase/', views.showcase, name="porftfolio-showcase"),
	path('showcase/render/', views.renders, name="portfolio-render")
]