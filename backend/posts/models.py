from django.db import models
from django.contrib.auth.models import User
from datetime import datetime



# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='posts/', default='posts/default.jpg')
    likes = models.ManyToManyField(User, related_name='post_likes', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Post: {self.title}"

class Comment(models.Model):
    post = models.ForeignKey(Post, related_name='comments', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Comment by {self.user.username} on {self.post.title}'

