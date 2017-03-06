from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from pollsApi.views import QuestionViewSet, ChoiceViewSet, api_root
from rest_framework import renderers

question_list = QuestionViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

choice_list = ChoiceViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

urlpatterns = format_suffix_patterns([
    url(r'^$', api_root),
    url(r'^questions/$', question_list, name='polls-question'),
    url(r'^choices/$', choice_list, name='polls-choices'),
])

urlpatterns += [
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
