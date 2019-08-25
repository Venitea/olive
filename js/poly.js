var pp = document.getElementsByClassName('poly_draw')[0];
function poly(){
    var mypoly = echarts.init(pp);
    mypoly.clear();
    mypoly.setOption({
        tooltip : {
            show: true,
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'none'       // 默认为直线，可选为：'line' | 'shadow'
            },
            
            backgroundColor: 'rgba(255,255,255,0.7)',//背景颜色（此时为默认色）
            borderRadius: 8,//边框圆角
            textStyle : {
                color : '#000',
            },
            padding: 10,    // [5, 10, 15, 20] 内边距
            borderColor: '#e1e1e1',
            borderWidth : 3,
            formatter: function (params) {
                // console.log(params)
                var res = '<p style="text-align: center; font-weight:bold">'+params[0].name+'</p>';
                for (var i = 0, l = params.length; i < l; i++) {
                    // res += '<br/>' +'iPhone: ' + params[i].value;//鼠标悬浮显示的字符串内容
                    res = '<div>' + res +'<p style="color: #72D0EB;font-size: 12px">' +'iPhone: ' + params[i].value + '</p>';
                } 
                return res;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '6%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [2005, 2006, 2007, 2008, 2009, 2010, 2011,2012],
            axisLine: {show:false},//轴线不显示
            axisTick: {show:false},
        },
        yAxis: {
            type: 'value',
            axisLine: {show:false},//轴线不显示
            axisTick: {show:false},
        },
        series: [{
            data: [2250, 4550, 7750, 5750, 10000, 9000, 8000,7000],
            type: 'line',
            areaStyle: {},
            symbol:'circle',
            symbolSize: 15,
            lineStyle:{
                width: 2,
                color: '#72D0EB'
            },
            itemStyle:{
                color: "#72D0EB"
            },
            areaStyle: {
                color: '#C5E5EE' //改变区域颜色
            }
        }]
    });
}
poly();