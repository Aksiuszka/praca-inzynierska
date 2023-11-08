from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView,
)

from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('fluff/schema/', SpectacularAPIView.as_view(), name='fluff-schema'),
    path(
        'fluff/docs/',
        SpectacularSwaggerView.as_view(url_name='fluff-schema'),
        name='fluff-docs',
    ),
    path('fluff/user/', include('user.urls')),
    path('fluff/smart-test/', include('smarttest.urls')),
]
