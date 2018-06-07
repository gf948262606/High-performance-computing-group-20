var myChart =
    echarts.init(document.getElementById('main5'),'vintage');

var option = {
    title: {
        text: '专家毕业学校',
        textStyle:{
            fontSize: 24
        },
        x: 'center',
        top: 20
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox:{
        show: true,
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:
            ['人数']
    },
    xAxis: {
        data:
            ['北京大学','清华大学','中国科学院','中国科学技术大学','新加坡国立大学','中科院','复旦大学','美国加州大学','香港科技大学','马里兰大学','上海交通大学','东京大学','南洋理工大学','中国科学院物理研究所','麻省理工学院','哥伦比亚大学','新加坡国立大学','山东大学','加州大学洛杉矶分校','武汉大学','浙江大学','美国贝勒医学院']
    },
    yAxis: {},
    dataZoom: [
        {
            type: 'slider',
            start: 0,
            end: 40
        }
    ],
    series: [{
        name: '人数',
        type: 'bar',
        data:
            [16,12,11,10,8,7,7,5,4,4,4,4,4,3,3,3,3,3,3,3,3,3],
        markPoint: {
            data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '平均值'}
            ]
        }
    }]
};
myChart.setOption(option);