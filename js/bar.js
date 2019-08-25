var bb = document.getElementsByClassName('bar')[0];
function bar(obj,arr,color){
    var mybar = echarts.init(obj);
    mybar.clear();
    mybar.setOption({
        tooltip : {
            borderRadius: 0,
            borderColor: '#fff',
            borderWidth : 1,
        },
        xAxis: {
            type: 'category',
            data: ['','','','','','',''],
            axisLine: {show:false},//轴线不显示
            axisTick: {show:false},
            // 去除刻度线
            show: false
        },
        yAxis: {
            // min:5,
            // max:9,
            splitNumber:1,
            type: 'value',
            axisLine: {show:false},//轴线不显示
            axisTick: {show:false},
            // 网格线不显示
            splitLine:{show: false},  
            // 去除刻度线
            show: false
        },
        series: [{
            data: arr,
            type: 'bar',
            color: color
        }]
    });
}
bar(bb,[6,9,8,7,6,8],'#A9D96C');
var  pic = document.getElementsByClassName('li_pic');
bar(pic[0],[5,6,7,5,9,6,4],'#A9D96C');
bar(pic[1],[3,2,5,8,4,7,5],'#58c9f1');
bar(pic[2],[1,6,9,3,4,8,5],'#8075c4');
bar(pic[3],[9,4,9,6,7,4,3],'#ff6c60');
bar(pic[4],[6,8,5,7,6,8,3],'#41cac0');
var pro = document.getElementsByClassName('project_pic');
bar(pro[0],[6,8,5,7,6,8,9],'#31f74d');
bar(pro[1],[6,8,5,7,6,8,9],'#fccb48');
bar(pro[2],[6,8,5,7,6,8,9],'#9777ff');