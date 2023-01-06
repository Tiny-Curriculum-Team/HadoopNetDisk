import Shares.views as views
from django.urls import path

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('openshare/', views.create_sharing),  # GET
    path('cancelshare/', views.del_sharing),  # POST
    path('getshare/', views.list_shares)  # GET
]
