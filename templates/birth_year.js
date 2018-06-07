var myChart =
    echarts.init(document.getElementById('main7'),'vintage');

var option = {
    title: {
        text: '专家出生年份',
        textStyle:{
            fontSize: 24
        },
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        formatter: "{a} <br/>{b} : {c}人"
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
            ['1975','1976','1977','1978','1979','1980','1981','1982','1983','1984','1985','1986','1987','1988','1990']
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
            [6,13,19,18,28,40,47,79,62,39,20,14,5,1,1],
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