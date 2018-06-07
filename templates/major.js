var myChart =
    echarts.init(document.getElementById('main3'),'vintage');

var option = {
    title: {
        text: '专家学科分布',
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
            ['化学','物理','生物学','材料学','医学','数学','环境科学','电子','计算机','机械','土木工程','能源','高分子','天文','海洋科学','光学','精密仪器','植物学','工学','气象学','电气','农学','自动化','空间科学','微电子','生态学','大气学','通信','汽车工程','冶金','纳米科学','航天','系统工程','水文学','软件','经济学','药学']
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
            [59,55,49,36,27,20,17,7,7,7,6,6,4,4,4,4,3,3,3,3,3,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1],
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