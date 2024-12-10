from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

from .models import Post
from .forms import PostForm
import json


# Home View
def home(request):
    return JsonResponse({"message": "Welcome to the Home View!"})


# List all posts
def post_list(request):
    posts = Post.objects.values()  # Fetch all posts as dictionaries
    return JsonResponse(list(posts), safe=False)  # Return as JSON array

@csrf_exempt
def post_detail(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    image_url = post.image.url if post.image else None  # Get the image URL if available
    return JsonResponse({
        "id": post.id,
        "title": post.title,
        "author": post.author,
        "content": post.content,
        "created_at": post.created_at.strftime('%Y-%m-%d %H:%M:%S'),
        "image": f"{settings.MEDIA_URL}{post.image}" if image_url else None,  # Add image URL
    })



@csrf_exempt
def create_post(request):
    if request.method == 'POST':  #(post use to submit the data)
        form = PostForm(request.POST, request.FILES)  # Include FILES
        if form.is_valid():
            post = form.save()
            return JsonResponse({"message": "Post created successfully!", "post_id": post.id}, status=201)
        return JsonResponse({"errors": form.errors}, status=400)
    return JsonResponse({"error": "POST method required"}, status=405)


@csrf_exempt
def update_post(request, post_id):
    post = get_object_or_404(Post, id=post_id)

    if request.method == 'PUT': #put use to modify(update)
        data = json.loads(request.body)
        post.title = data.get('title', post.title)
        post.content = data.get('content', post.content)
        post.author = data.get('author', post.author)
        post.save()
        return JsonResponse({
                    "id": post.id,
                    "title": post.title,
                    "content": post.content,
                    "author": post.author,
                    "created_at": post.created_at
                })
        return JsonResponse({"error": "Invalid HTTP method."}, status=405)



# Delete a post
@csrf_exempt
def delete_post(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    if request.method == 'DELETE':
        post.delete()
        return JsonResponse({"message": "Post deleted successfully!"})
    return JsonResponse({"error": "DELETE method required"}, status=405)

