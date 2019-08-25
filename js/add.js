var set = document.getElementsByClassName('h1');
var arr = [495,947,328,1328];
var array = [2,5,2,6]
// var array = [];
for(var i=0; i<set.length; i++){
    time(arr[i],set[i],array[i]);
}
function time(res,obj,f){
    var time = null;
    var n = 0;
    time = setInterval(function(){
        // var m = Math.floor(Math.random()*f); 
        n += 1;
        obj.innerHTML = n;
        if(n == res){
            clearInterval(time);
        }  
    },1);
}

