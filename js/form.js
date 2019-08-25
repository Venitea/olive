commen('1122px');

var input = document.getElementsByClassName('change');
for(var i=0; i<input.length; i++){
    input[i].index = i;
    var last = 0;
    input[i].onclick = function(){
        input[last].style.border = '1px solid #e2e2e4';
        this.style.border = '1px solid #517397';
        last = this.index;
    }
}
document.onclick = function(e){
    var current = e.target.className;
    if(current != 'change' && current != 'in_bg change'){
        // console.log(current);
        for(var i=0; i<input.length; i++){
            input[i].style.border = '1px solid #e2e2e4';
        }
    }
}

// Tab切换
var tab = document.getElementsByClassName('g_nav_box1');
var info = document.getElementsByClassName('g_info1');
var next = document.getElementsByClassName('next');
var pre = document.getElementsByClassName('pre');
// console.log(next.length)

function Tab(btn,n){
    for(var k=0; k<btn.length; k++){
        btn[k].index = k;   
        btn[k].onclick = function(){      
            for(var j=0; j<info.length; j++){   
                if(j == this.index + n){
                    // console.log(this.index); 
                    tab[j].className ='g_nav_box1 g_click';
                    info[j].className = 'g_info1 g_on';
                }else{
                    // console.log(btn);
                    tab[j].className = 'g_nav_box1';
                    info[j].className = 'g_info1';
                }
            } 
        }
    }
}
// tab
Tab(tab,0);
Tab(next,1);
Tab(pre,0);


// 向导
var nav = document.getElementsByClassName('g_nav_box2');
var list = document.getElementsByClassName('g_info2');
var user = document.getElementById('username');
var email = document.getElementById('email');
var warn1 = document.getElementsByClassName('must1')[0];
var warn2 = document.getElementsByClassName('must2')[0];
var warn3 = document.getElementsByClassName('error')[0];
var next1 = document.getElementsByClassName('next1');
var pre1 = document.getElementsByClassName('pre1');

function guide(obj,f){
    for(var i=0; i<obj.length; i++){
        obj[i].index = i;
        obj[i].onclick = function(){
            console.log(user.value);
            var regexp = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            var e = email.value;
            if(user.value != '' && email.value != ''){
                if(regexp.test(e)){
                    warn1.style.display = 'none';
                    warn2.style.display = 'none';
                    warn3.style.display = 'none';
                    for(var m=0; m<list.length; m++){
                        if(m == this.index + f){
                            nav[m].className = 'g_nav_box2 g_click';
                            list[m].className = 'g_info2 g_on';
                        }else{
                            nav[m].className = 'g_nav_box2';
                            list[m].className = 'g_info2';
                        }
                    }
                }else{
                    warn3.style.display = 'block';
                    warn1.style.display = 'none';
                    warn2.style.display = 'none';
                }
            }else if(user.value == '' && email.value == ''){
                warn1.style.display = 'block';
                warn2.style.display = 'block';
                warn3.style.display = 'none';
            }else if(user.value == ''){
                if(regexp.test(e)){
                    warn1.style.display = 'none';
                    warn2.style.display = 'block';
                    warn3.style.display = 'none';
                }else{
                    warn1.style.display = 'none';
                    warn2.style.display = 'block';
                    warn3.style.display = 'block';
                }
            }else{
                warn1.style.display = 'block';
                warn2.style.display = 'none';
                warn3.style.display = 'none';
            }
        }
    }
}
guide(nav,0);
guide(next1,1);
guide(pre1,0);