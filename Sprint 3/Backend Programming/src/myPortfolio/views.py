from django.shortcuts import render
from django.http import HttpResponse
from .forms import CommentForm
from django.shortcuts import redirect
from .models import Comment


# -----------------------------------------

def renders(request):
	comForm = CommentForm()
	comments = Comment.objects.all()
	if request.method == 'POST':
		print(request.POST)
		comForm = CommentForm(request.POST)
		if comForm.is_valid():
			comForm.save()
			return redirect('.')
	context = {
		'forms':comForm,
		'comments': comments,
	}
	return render(request, 'myPortfolio/render.html', context)

def home(request):
	return render(request, 'myPortfolio/index.html')

def showcase(request):
	return render(request, 'myPortfolio/portfolio.html')

