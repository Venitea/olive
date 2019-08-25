var ll = document.getElementsByClassName('line')[0];
function chart(){
    // console.log(ll);
    var myChart = echarts.init(ll);
    myChart.clear();
    myChart.setOption({
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line',       // 默认为直线，可选为：'line' | 'shadow'
                lineStyle:{
                    color: '#fff'
                },
            },
            borderRadius: 0,
            borderColor: '#fff',
            borderWidth : 1,
        },
        grid: {
            left: '-10%',
            right: '0%',
            bottom: '0%',
            top: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category', 
            data: ['','','','','','','','','','',''],
            axisLine: {show:false},//轴线不显示
            axisTick: {show:false},
            // 去除刻度线
            show: false
        },
        yAxis: {
            type: 'value',
            axisLine: {show:false},//轴线不显示
            axisTick: {show:false},
            // 网格线不显示
            splitLine:{show: false},  
            // 去除刻度线
            show: false
        },
        series: [{
            data: [564,123,890,564,455,200,135,667,333,526,996],
            type: 'line',
            symbol:'circle',
            symbolSize: 8,
            hoverAnimation:false,
            lineStyle:{
                width: 1
            },
            itemStyle:{
                color: "#fff",
                emphasis:{
                    color: '#51F351',
                }
            }
        }]
    });
}
chart();