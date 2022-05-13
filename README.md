# Bootstrap Django 4, vue 3 ts, vite, django-js-route 

*Please make pull request for new version or deeply integration*  

NOTE: run django server and `vite` from project root

## packed with inertia

```
def index(request):
    return render_inertia(
        request,
        'Index', # VUE COMPONENT
        props={'title': 'My inertia-django page', 'id': 123}, #PROPS 
        template_name='index.html'
    )
```

## you can use you routes inside js with django-js-route
```js
const link = (<any>window).reverseUrl('catalog')
```

## this project charged with Vite and support hot module reload

fast dev
