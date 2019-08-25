var area = document.getElementsByClassName('area_pic')[0];
function chart(){
    var myChart = echarts.init(area);
    myChart.clear();
    myChart.setOption({
        
        tooltip : {
            backgroundColor: 'rgba(87,163,185,.7)',
            formatter: '{a} | x:{b} | y:{c}'
        },
        legend: {
            x: 'right',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                axisTick: {
                    show: false
                },
                axisLine:{
                    lineStyle:{
                        color:'#eeeeee',
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#EEEEEE'],
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#000'
                    }
                },
                boundaryGap : false,
                // data: [
                //         '2:00','2:10','2:20','2:30','2:40','2:50',
                //         '3:00','3:10','3:20','3:30','3:40','3:50',
                //         '4:00','4:10','4:20','4:30','4:40','4:50'
                //     ]
                data : ['1:53','2:10','2:26','2:43',
                        '3:00','3:16','3:33','3:50',
                        '4:06','4:23','4:40','4:56'],
                
            }
        ],
        yAxis : [
            {
                type : 'value',
                min: 0,
                max: 1000,
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#EEEEEE'],
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#eeeeee',
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#000'
                    }
                },
                interval: 200,
            },
            {
                type : 'value',
                splitLine:{show: false},
                axisTick: {
                    show: false
                },
                axisLine:{
                    lineStyle:{
                        color:'#eeeeee',
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#000'
                    }
                },
                min: 0,
                max: 900,
                interval: 100,
            }
        ],
        series : [
            {
                name:'页面视图',
                type:'line',
                yAxisIndex: 0,
                areaStyle: {},
                // symbol:'circle',
                symbolSize: 10,
                lineStyle:{
                    width: 2,
                    color: '#5DC0DC'
                },
                areaStyle: {
                    color: '#BEE6F1' //改变区域颜色
                },
                // hoverAnimation:false,
                itemStyle:{
                    color: "#5DC0DC",
                    emphasis:{
                        borderColor: '#AEDFED',
                        borderWidth: 8
                    }
                },
                data:[253, 465, 498, 384, 280, 108, 120,474,623,479,788,836]
                // data:[['1:53',253], ['2:10',465],['2:26',498],['2:43',384] ,['3:00',280],
                // ['3:16',108],['3:33',120],['3:50',474],['4:06',623],['4:23',479],['4:40',788],['4:56',836]]
            },
            {
                name:'在线用户',
                type:'line',
                yAxisIndex: 1,
                areaStyle: {},
                // symbol:'circle',
                symbolSize: 10,
                lineStyle:{
                    width: 2,
                    color: '#0E82A3'
                },
                areaStyle: {
                    color: 'none' //改变区域颜色
                },
                itemStyle:{
                    color: "#0E82A3",
                    emphasis:{
                        borderColor: '#86C0D1',
                        borderWidth: 8
                    }
                },
                // data:[['1:53',253], ['2:10',465],['2:26',498],['2:43',384] ,['3:00',280],
                // ['3:16',108],['3:33',120],['3:50',474],['4:06',623],['4:23',479],['4:40',788],['4:56',836]]
                data:[253, 465, 498, 384, 280, 108, 120,474,623,479,788,836]
            },
        ]
    })
}
chart();