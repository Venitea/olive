var time = document.getElementsByClassName('time_pic')[0];
var my = echarts.init(time);

option1 = { 
    tooltip: {
        trigger: 'axis',
        axisPointer :{
            type: 'none'
        },
        backgroundColor: 'rgba(87,163,185,.7)',
        formatter: 's% | x:x% | y:{c}' 
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            show: false,
            axisLine:{
                lineStyle:{
                    color:'#000',
                }
            },
            axisTick: {
                show: false
            },
            boundaryGap: false,
            data: (function (){
                var res = [];
                var len = 50;
                while (len--) {
                    res.push(50 - len - 1);
                }
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            max: 30,
            min: 0,
            axisTick: {show:false},
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#000',
                }
            },
            boundaryGap: [0.2, 0.2]
        }
    ],
    series: [
        {
            type:'line',
             itemStyle: {
                color: '#18B5E2'
            },
             areaStyle: {
                color: '#9FDDEF'
            },
            data:(function (){
                var res = [];
                var len = 0;
                while (len < 1000) {
                    res.push((Math.random()*10 + 5).toFixed(1) - 0);
                    len++;
                }
                return res;
            })()
        }
    ]
};
var count  = 50;
setInterval(function (){
    var data1 = option1.series[0].data;
    data1.shift();
    data1.push(Math.round((Math.random() - 0.5)*10  + data1[i - 1]));
    option1.xAxis[0].data.shift();
    option1.xAxis[0].data.push(count++);

    my.setOption(option1);
}, 200);
// 收起与关闭
commen('495px')

