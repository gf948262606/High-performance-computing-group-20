#_*_ coding:utf-8 _*_

#@author:Garfield
#@param:request
#@time:2018-06-06

from django.http import HttpResponse
from Thousand_Talents_Program.models import thousand_talents_program
from django.db.models import Count
from django.db.models import Q

'''
name = models.CharField(max_length=20)
birthday = models.CharField(max_length=40)
sex = models.CharField(max_length=40)
native_place = models.CharField(max_length=40)
native_longitude = models.CharField(max_length=40)
jiguan_latitude = models.CharField(max_length=40)
organization = models.CharField(max_length=40)
major = models.CharField(max_length=100)
major_abbreviation = models.CharField(max_length=40)
title_date = models.CharField(max_length=40)
title_organization = models.CharField(max_length=40)
school = models.CharField(max_length=40)
graduation_time = models.CharField(max_length=40)
province = models.CharField(max_length=40)
former_organization = models.CharField(max_length=40)
'''
#增加数据
def add_data(request):
    name = request.POST['name']
    birthday = request.POST['birthday']
    sex=request.POST['']
    native_place=request.POST['native_place']
    native_longitude=request.POST['native_longitude']
    jiguan_latitude=request.POST['jiguan_latitude']
    major=request.POST['major']
    major_abbreviation=request.POST['major_abbreviation']
    title_date=request.POST['title_date']
    title_organization=request.POST['title_organization']
    school=request.POST['school']
    graduation_time=request.POST['graduation_time']
    province = request.POST['province']
    former_organization = request.POST['former_organization']
    create = thousand_talents_program(
        name=name,
        birthday=birthday,
        sex=sex,
        native_place=native_place,
        native_longitude=native_longitude,
        jiguan_latitude=jiguan_latitude,
        major=major,
        major_abbreviation=major_abbreviation,
        title_date=title_date,
        title_organization=title_organization,
        school=school,
        graduation_time=graduation_time,
        province=province,
        former_organization=former_organization)
    create.save()
    print(type(create),create)
    return HttpResponse("<p>添加成功！</p>")


#按id删除数据
def delete_data(request):
    id=request.POST['id']
    create=thousand_talents_program.objects.get(id)
    create.delete()
    return HttpResponse("<p>删除成功！</p>")

#删除所有
def delete_all(request):
    thousand_talents_program.objects.all().delete()
    return HttpResponse("<p>全部数据删除成功！</p>")

#按id获取数据进行修改
def update_data(request):
    id=request.POST['id']
    cell=request.POST['cell']
    cell_value=request.POST['cell_value']
    create=thousand_talents_program.objects.get(id)
    create.cell=cell_value
    create.save()
    return HttpResponse("<p>修改成功！</p>")

#查询
#所有数据
def query_all(request):
    response_all=""
    list=thousand_talents_program.objects.all()
    for item in list:
        response_all += item +" "
    response=response_all
    return HttpResponse("<p>"+response+"</p>")

#按字段查询数据
def query(request):
    cell=request.POST['cell']
    cell_value=request.POST['cell_value']
    response_all=""
    list=thousand_talents_program.objects.get(cell=cell_value)
    for item in list:
        response_all += item +" "
    response=response_all
    return HttpResponse("<p>"+response+"</p>")

#查询分析维度数据
#性别
def query_sex(request):
    response_all=""
    result=thousand_talents_program.objects.values('sex').annotate(Count('name'))
    for item in result:
        response_all += item +" "
    response=response_all
    return HttpResponse("<p>"+response+"</p>")

#所属单位
def query_organization(request):
    response_all=""
    result=thousand_talents_program.objects.filter(~Q(organization = '')).values('organization').annotate(res=Count('name')).order_by('-res')[0:10]
    for item in result:
        response_all += item +" "
    response=response_all
    return HttpResponse("<p>"+response+"</p>")

#专业
def query_major(request):
    response_all=""
    result=thousand_talents_program.objects.filter(~Q(major = '')).values('major').annotate(res=Count('name')).order_by('-res')
    for item in result:
        response_all += item +" "
    response=response_all
    return HttpResponse("<p>"+response+"</p>")

#获得称号的单位
def query_title_organization(request):
    response_all=""
    result = thousand_talents_program.objects.filter(~Q(title_organization='')).values('title_organization').annotate(res=Count('name')).order_by('-res')[0:10]
    for item in result:
        response_all += item +" "
    response=response_all
    return HttpResponse("<p>"+response+"</p>")

#毕业学校
def query_school(request):
    response_all=""
    result = thousand_talents_program.objects.filter(~Q(school='')).values('school').annotate(res=Count('name')).order_by('-res')[0:10]
    for item in result:
        response_all += item +" "
    response=response_all
    return HttpResponse("<p>"+response+"</p>")

#毕业学校所属国家
def query_school_country(request):
    response_all=""
    result = thousand_talents_program.objects.filter(~Q(school_country='')).values('school_country').annotate(res=Count('name')).order_by('-res')
    for item in result:
        response_all += item +" "
    response=response_all
    return HttpResponse("<p>"+response+"</p>")

#出生年份
def query_year(request):
    response_all=""
    #result = thousand_talents_program.objects.filter(~Q(birthday='')).annotate(year=Substr('birthday',1,4)).values('year').annotate(res=Count('name')).order_by('-res')
    result=thousand_talents_program.objects.filter(~Q(birthday='')).extra(select={'year':'SUBSTR(birthday from 1 for 4)'}).values('year').annotate(res=Count('name')).order_by('-res')
    for item in result:
        response_all += item +" "
    response=response_all
    return HttpResponse("<p>"+response+"</p>")

