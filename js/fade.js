var box = document.getElementsByClassName('hide_box')[0];
var close = document.getElementsByClassName('close')[0];
var cancel = document.getElementsByClassName('cancel')[0];
var hide = document.getElementsByClassName('hide')[0];
var forget = document.getElementsByClassName('forget')[0];
var bg = document.getElementsByClassName('content')[0];
forget.onclick = function(){
    hide.style.zIndex = '0';
    box.style.transform = 'translateY(0)';
    hide.style.background = 'rgba(0,0,0,.5)';
}
close.onclick = function(){
    box.style.transform = 'translateY(-120%)';
    hide.style.background = 'none';
    hide.style.zIndex = '-1';
}
cancel.onclick = function(){
    box.style.transform = 'translateY(-120%)';
    hide.style.zIndex = '-1';
    hide.style.background = 'none';
}