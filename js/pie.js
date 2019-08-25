var tt = document.getElementsByClassName('pie_size');
function pie(obj,color,x,y){
    var pie = echarts.init(obj);
    pie.clear();
    pie.setOption({
        // tooltip: {
        //     trigger: 'item',
        //     formatter: "{a} <br/>{b}: {c} ({d}%)"
        // },
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        // },
        color:[color,'#E8E8E8'],
        series: [
            {
                type:'pie',
                radius: ['56%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false,
                    }
                },
                data:[
                    {value:x},
                    {value:y},
                ]
            }
        ]
    });
}
var val = document.getElementsByClassName('value');
val[0].value = 78;
val[1].value = 63;

pie(tt[0],'#F9A3A3',78,22);
pie(tt[1],'#fcce54',63,37);
