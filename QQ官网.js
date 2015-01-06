var cont = document.getElementById('content-1').getElementsByTagName('li'),
nav = document.getElementById('content-2').getElementsByTagName('li'),
index, focusTimeHandler;

	var getCurIndex = function(){
      for(var i = 0; i < nav.length; i++){
          if(nav[i].className.indexOf('selected')!=-1)
              return i;
      }
  }
  var move = function(flag){
    index = getCurIndex();
    if (flag){
        index++;
        if(index >= cont.length)
            index = 0;
    }
    else {
        index--;
        if(index < 0)
            index = cont.length-1;
    }
    display(index);
}

var display = function(index){	
    for(var i=0; i<nav.length; i++){
        cont[i].className = '';
        nav[i].className = '';
    }
    cont[index].className='show';
    nav[index].className='selected';
}
var autoTabStart = function(){
    focusTimeHandler = setInterval(function(){move(true);},1000);
}
var autoTabStop = function(){
    clearInterval(focusTimeHandler);
}
for(var i=0; i<nav.length; i++){
    nav[i].onmouseover = function(){
        for(j = 0; j < nav.length; j++){
            if(this == nav[j])
                index = j;
        }
        display(index);
    }
}