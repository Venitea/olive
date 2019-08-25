var pie2 = document.getElementsByClassName('pie_pic2')[0];
var mapie = echarts.init(pie2);
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)",
        backgroundColor: 'rgba(79,156,178,.8)'
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['白金会员','黄金会员','银牌会员','高级会员']
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
            color: ['#6DC5A3','#869CB3','#0984A7','#778A9F'],
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
            itemStyle:{
                normal: {
                   borderWidth: 1, 
                   borderColor: '#fff',
                 }
           },
            radius: ['45%', '90%'],
            data:[
                {value:335,name:'白金会员'},
                {value:579,name:'黄金会员'},
                {value:848,name:'银牌会员'},
                {value:1048,name:'高级会员'}
            ]
        }
    ]
};
mapie.setOption(option);