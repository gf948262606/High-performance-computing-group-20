var myChart = echarts.init(document.getElementById('main6'),'vintage');

var option = {
    title: {
        text: '专家毕业学校所属国家分布',
        textStyle:{
            fontSize: 24
        },
        x: 'center',
        top: 50
    },
    toolbox:{
        show: true,
        feature: {
            saveAsImage: {
                show: true
            }
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}人 ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 60,
        top: 100,
        data:
            ['美国','中国','新加坡','英国','德国','加拿大','瑞士','日本','澳大利亚','法国','其它']
    },
    series: [
        {
            name: "国家",
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:156,name:'美国'},
                {value:133,name:'中国'},
                {value:23,name:'新加坡'},
                {value:15,name:'英国'},
                {value:14,name:'德国'},
                {value:10,name:'加拿大'},
                {value:6,name:'瑞士'},
                {value:6,name:'日本'},
                {value:6,name:'澳大利亚'},
                {value:5,name:'法国'},
                {value:18,name:'其它'},
            ]
        }
    ]
};
myChart.setOption(option);