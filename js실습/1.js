var hw=document.getElementById('hw');
var target=document.querySelector('body');

var Body ={
  backgroundColor : function(color){
    target.style.backgroundColor=color;
  },
  setColor : function(color){
    target.style.color=color;
  }
}

function setColor(color){
  var alist = document.querySelectorAll('a');
  var i =0;
  while(i < alist.length){
    alist[i].style.color=color;
    i=i+1;
  }
}

hw.addEventListener('click',function jin()
{
  if(document.querySelector('#hw').value=='night'){
    Body.backgroundColor('black');
    Body.setColor('white');
    document.querySelector('#hw').value='day';
    setColor('powderblue');
  }
  else{
    Body.backgroundColor('white');
    Body.setColor('black');
    document.querySelector('#hw').value='night';
    setColor('lightgray');
  }
}
)
