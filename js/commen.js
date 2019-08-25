var down = document.getElementsByClassName('down');
var close = document.getElementsByClassName('close');
var oDiv = document.getElementsByClassName('up_div');
var hide = document.getElementsByClassName('hide');

function commen(high){   
    for(var i=0; i<close.length; i++){
        close[i].index = i;
        close[i].onclick = function(){
            oDiv[this.index].style.display = 'none';       
        }
    }
    for(var j=0; j<down.length; j++){
        down[j].dex = j;
        down[j].flag = false;
        down[j].onclick = function(){
            if(this.flag){
                hide[this.dex].style.maxHeight = high;
                hide[this.dex].style.overflow = '';
                this.flag = false;
            }else{
                hide[this.dex].style.overflow = 'hidden';
                hide[this.dex].style.maxHeight = '0px';
                this.flag = true;
            }
        }
    }
}