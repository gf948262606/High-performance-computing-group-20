var myChart =
    echarts.init(document.getElementById('main4'),'vintage');

var option = {
    title: {
        text: '获得称号单位',
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
            ['浙江大学','北京大学','中国科学技术大学','上海交通大学','清华大学','复旦大学','中国科学院上海生命科学研究院','南京大学','南开大学','厦门大学','上海科技大学','同济大学','天津大学','北京航空航天大学','东南大学','南京工业大学','山东大学','华中科技大学','苏州大学','哈尔滨工业大学','大连理工大学','华东师范大学','中国医学科学院北京协和医学院','东北大学','北京师范大学','中国农业大学','中国科学院大气物理研究所','南京信息工程大学','中国工程物理研究院北京计算科学研究中心','中国科学院国家纳米科学中心','上海大学','中国科学院生物物理研究所','南京农业大学']
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
            [34,28,27,26,24,23,13,12,11,10,9,9,8,8,7,6,6,6,6,6,5,4,4,4,4,4,3,3,3,3,3,3,2],
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