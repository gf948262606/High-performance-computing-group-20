from django.shortcuts import render

# Create your views here.

from django.shortcuts import render


def display(request):
    context = {}
    context['hello'] = 'Welcome to Thousand Talents Program System!'
    return render(request, '/experts/expert.html', context)