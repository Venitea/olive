var pie1 = document.getElementsByClassName('pie_pic1')[0];
var mc = echarts.init(pie1);
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)",
        backgroundColor: 'rgba(87,163,185,.8)'
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['访客注册','免费注册','付费注册']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    
    series: [
        {
            type:'pie',
            color: ['#1387A9','#4EABC6','#8FD5E9'],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            radius: [0, '44%'],
            data:[
                {
                    value:335,
                    name:'访客注册',
                    itemStyle:{
                        emphasis:{
                            color:'#1387A9'
                        }
                    }
                },
                {
                    value:679,
                    name:'免费注册',
                    itemStyle:{
                        emphasis:{
                            color:'#4EABC6'
                        }
                    }
                },
                {
                    value:1548,
                    name:'付费注册',
                    itemStyle:{
                        emphasis:{
                            color:'#8FD5E9'
                        }
                    }
                }
            ]
        },
        {
            type:'pie',
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            radius: ['45%', '90%'],
            data:[
                {value:335,name:'访客注册'},
                {value:679,name:'免费注册'},
                {value:1548,name:'付费注册'}
            ]
        }
    ]
};
mc.setOption(option);