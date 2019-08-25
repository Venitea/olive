// 收起与关闭
commen('448px');
var list_body = document.getElementsByClassName('al_body')[0];
var list = list_body.getElementsByTagName('li');
for(var i=0; i<list.length; i++){
    list[i].onclick = function(){
        this.style.display = 'none';
    }
}

// 轮播
var map = document.getElementsByClassName('map')[0];
var circle = document.getElementsByClassName('circle')[0];
var cir = circle.getElementsByTagName('li');
var box = document.getElementsByClassName('round_box')[0];
var timer = null;
var number = 0;

function round(){
    timer = setInterval(function(){
        number++;
        if(number >= cir.length){
            number = 0;
        }
        change(number);
    },2000);
}
round();
function change(number){
    map.style.marginLeft = (-100*number) + '%';
    for(var i=0; i<cir.length; i++){
        if(number == i){
            cir[i].className = 'map_on';
        }else{
            cir[i].className = '';
        }
    }
    right.onclick = function(){ 
        if(number < 2){
            change(number+1);
        }else{
            number = 0;
            change(number);
        }
    }
    left.onclick = function(){
        if(number-1 >= 0){
            change(number-1);
        }else{
            number = 2;
            change(number);
        }
    }
}
box.onmouseover = function(){
    clearInterval(timer);  
}
box.onmouseout = round;
for(var j=0; j<cir.length; j++){
    cir[j].in = j;
    cir[j].onclick = function(){
        change(this.in);
    }
}
var left = document.getElementsByClassName('round_a_left')[0];
var right = document.getElementsByClassName('round_a_right')[0];

// Tab切换
function tab(father,son){
    var t = document.getElementsByClassName(father)[0];
    var tab_btn = t.getElementsByTagName('span');
    var tab_list = document.getElementsByClassName(son);

    for(var i=0; i<tab_btn.length; i++){
        tab_btn[i].index = i;
        tab_btn[i].onclick = function(){
            // console.log()
            for(var j=0; j<tab_list.length; j++){
                if(j == this.index){
                    this.className = 'tab_on';
                    tab_list[j].className = son + ' tab_show';
                }else{
                    tab_list[j].className = son;
                    tab_btn[j].className = '';
                }
            }      
        }
    }
}
tab('tab1','tab1_list');
tab('tab2','tab2_list');