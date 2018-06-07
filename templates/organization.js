var myChart =
    echarts.init(document.getElementById('main2'),'vintage');

var option = {
    title: {
        text: '专家所属单位',
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
        data: ['北京大学','中国科学技术大学','上海交通大学','复旦大学','清华大学','中国科学院上海生命科学研究院','浙江大学','厦门大学','南京大学','上海科技大学','同济大学','北京航空航天大学','东南大学','山东大学','华中科技大学','哈尔滨工业大学','南开大学化学学院','北京师范大学','华东师范大学','中国科学院国家纳米科学中心','上海大学','浙江大学生命科学研究院','中国科学院大气物理研究所','南开大学物理科学学院','苏州大学医学部','南京工业大学化工学院','浙江大学材料科学与工程学院','北京工业大学','浙江大学生物系统工程与食品科学学院','南京理工大学环境与生物工程学院','北京理工大学','中国科学院高能物理研究所']
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
            [28,27,22,19,18,13,12,10,10,9,9,8,7,6,6,6,4,4,4,3,3,3,3,2,2,2,2,2,2,2,2,2],
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