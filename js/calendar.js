var myDate = new Date(),
    //年份
    year = myDate.getFullYear(),
    //月份
    month = myDate.getMonth(),
    //日期
    day = myDate.getDate();


var body = document.getElementsByClassName('day_body')[0];
var td = document.getElementsByClassName('span');
var x = document.getElementsByClassName('month')[0];
var y = document.getElementsByClassName('year_num')[0];
// console.log(td);

function addDate(year,month,day,mm){
    //获取当月的第一天是星期几
    var monthFirst = new Date(year, month, 1).getDay();
    //获取本月的最后一天
    var lastday = new Date(year,(month + 1) , 0);
    //获取当前月的天数
    var totalDay = lastday.getDate();
    //获取上个月的天数
    var last = new Date(year, month, 0);
    var num = last.getDate();

    var current = 1,next = 1;
    for(var i=0; i<td.length; i++){
        if(i < monthFirst){
            td[monthFirst-1-i].innerHTML = num--;    
        }else{
            if(current <= totalDay){
                td[i].innerHTML = current++;
            }else{
                td[i].innerHTML = next++;
            }
        }
    }

    // if(mm % 12){
    //     var count = mm/12;
    //     alert(Math.ceil(count));
    // }
    if(month >=0 && month<12){
        x.innerHTML = month + 1 + ' ';
        y.innerHTML = year;
    }else if(month >= 12){
        x.innerHTML = month-11 + ' ';
        y.innerHTML = year + 1;
    }else if(month <= 0){
        x.innerHTML = month + 13 + ' ';
        y.innerHTML = year - 1;
    }
    console.log(month);

    if((month == myDate.getMonth()) && (year == myDate.getFullYear())){
        // 给今天设置样式
        var n = day + monthFirst;
        td[n-1].className = 'span select';
    }else{
        for(var i=0; i<td.length; i++){
            td[i].className = 'span';
        }
    }
    
    
}

addDate(year,month,day);

// 日历切换上下月
var left = document.getElementsByClassName('fa-chevron-left')[0];
var right = document.getElementsByClassName('fa-chevron-right')[0];

var mm = 0;
left.onclick = function(){ 
    mm++;
    addDate(year,month-1,day,mm);
    month = month - 1;
}
right.onclick = function(){
    addDate(year,month+1,day);
    month =month + 1;
}
