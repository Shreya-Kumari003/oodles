from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.home, name='home'),
    path('posts/', views.post_list, name='post_list'),
    path('posts/<int:post_id>/', views.post_detail, name='post_detail'),
    path('posts/create/', views.create_post, name='create_post'),
    path('posts/<int:post_id>/edit/', views.update_post, name='update_post'),
    path('posts/<int:post_id>/delete/', views.delete_post, name='delete_post'),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
