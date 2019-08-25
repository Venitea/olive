var team = document.getElementsByClassName('team_pic')[0];
var myteam = echarts.init(team);
myteam.setOption({
    tooltip: {
        backgroundColor: 'rgba(87,163,185,.7)',
        formatter: '{a} | x:{b} | y:{c}'
    },
    legend: {
        x: 'left',
    },
    dataset: {
        
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisTick:{
            interval: 1,
            alignWithLabel: false
        },
        // boundaryGap: false,
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
        show: false,
        data: [0.0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0]
    },
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 1000,
            interval: 200,
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
        },
        
    ],
    series: [
        {
            type: 'line',
            name: '过去48小时',
            symbolSize: 8,
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
                    borderWidth: 5
                }
            },
            data: [445,592,738,532,234,143,147,63,64,43,86,201,315]
        },
        {
            type: 'line',
            name: '过去24小时',
            
            symbolSize: 8,
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
                    borderWidth: 5
                }
            },
            data: [601,520,337,261,157,78,58,48,54,43,86,214,364,449]
        },
        {
            type: 'bar',
            name: '区别',
            barGap: '0%',
            barCategoryGap:'0%',
            color: '#B7D7E0',
            itemStyle:{
                borderWidth: 2,
                borderColor: '#4B9BB2',
            },
            data: [156,72,401,271,77,65,58,15,10,5,2,13,49,52]
        }
    ]
});
