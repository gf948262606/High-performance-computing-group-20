var myChart = echarts.init(document.getElementById('main1'),'vintage');

var option = {
    title: {
        text: '专家性别分布',
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
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 280,
        top: 150,
        data: ['男','女']
    },
    series: [
        {
            name: "性别",
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:47,name:'女'},
                {value:345,name:'男'}
            ]
        }
    ]
};
myChart.setOption(option);