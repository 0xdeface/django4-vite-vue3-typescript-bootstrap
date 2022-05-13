from django.shortcuts import render
from inertia.views import render_inertia


def catalog(request):
    return render_inertia(
        request,
        'Catalog',
        props={'title': 'My inertia-django page', 'id': 123},
        template_name='index.html'
    )


def index(request):
    return render_inertia(
        request,
        'Index',
        props={'title': 'My inertia-django page', 'id': 123},
        template_name='index.html'
    )
