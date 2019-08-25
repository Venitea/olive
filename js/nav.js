// 侧边导航栏
var aList = document.getElementsByClassName('click');
var Second = document.getElementsByClassName('second_nav');
var add = document.getElementsByClassName('add');
var ll = document.getElementsByClassName('nav_list1')[0];
var bar = document.getElementsByClassName('i_bar')[0];
var aside = document.getElementsByClassName('aside')[0];
var content = document.getElementsByClassName('content')[0];
var last = 0;
for(var i=0; i<aList.length; i++){
    aList[i].index = i;
    aList[i].isclick = false;
    aList[i].onclick = function(){
        if(this.isclick){
            ll.className = 'nav_list1 dash';
            aList[this.index].className = 'nav_list click on';
            Second[this.index].style.maxHeight = '0';
            aList[this.index].getElementsByTagName('i')[0].style.color = '#72d0eb';
            add[this.index].style.background = "url('img/nav-expand.png') no-repeat top";
            this.isclick = false; 
        }else{
            ll.className = 'nav_list1 dash';
            aList[last].className = 'nav_list click';
            Second[last].style.maxHeight = '0';
            aList[last].getElementsByTagName('i')[0].style.color = '#aeb2b7';
            add[last].style.background = "url('img/nav-expand.png') no-repeat top";
            
            aList[this.index].className = 'on nav_list click';
            Second[this.index].style.maxHeight = '360px';
            aList[this.index].getElementsByTagName('i')[0].style.color = '#72d0eb';
            add[this.index].style.background = "url('img/nav-expand.png') no-repeat bottom";
            aList[last].isclick = false;
            this.isclick = true;
            last = this.index;
        }        
    }
}

bar.onclick = function(){
    console.log(aside.style.display);
    if(aside.style.display == 'block'){
        aside.style.display = 'none';
        content.style.marginLeft = '0px';
    }else{
        aside.style.display = 'block';
        content.style.marginLeft = '210px';
    }
}


// 顶部导航栏
var aLi = document.getElementsByClassName('li_out');
var sec = document.getElementsByClassName('sec_div');
var nav_li = document.getElementsByClassName('nav_li');

for(var i=0 ;i<aLi.length; i++){
    aLi[i].index = i;
    var lastIndex = 0;
    aLi[i].flag = false;
    aLi[i].onclick = function(){
        // console.log(this);
        if(this.flag){
            sec[this.index].style.display = 'none';
            aLi[this.index].flag = false;
        }else{
            sec[lastIndex].style.display = 'none';
            aLi[lastIndex].style.background = 'none';
            aLi[lastIndex].getElementsByClassName('nav_li')[0].style.background = 'none';
    
            this.getElementsByClassName('nav_li')[0].style.background = '#fff';
            sec[this.index].style.display = 'block';
            aLi[lastIndex].flag = false;
            this.flag = true;
            lastIndex = this.index;
        }       
    }
}

// 登录框
var login = document.getElementsByClassName('out')[0];
var reg = document.getElementsByClassName('header_right')[0];
var show = document.getElementsByClassName('user_list')[0];

login.onclick = function(){  
    if(show.style.display == 'none'){
        show.style.display = 'block';
        reg.style.background = '#fff';
    }else{
        show.style.display = 'none';
    }
}

// 点击空白处消失
document.onclick = function(e){
    var current = e.target.className;
    if(current != 'li_out'){
        for(var i=0 ;i<aLi.length; i++){
            nav_li[i].style.background = 'none';
            sec[i].style.display = 'none';
        }
    }
    if(current != 'out'){
        show.style.display = 'none';
        reg.style.background = 'none';
    }
}



