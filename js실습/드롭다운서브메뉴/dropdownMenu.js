var header = document.querySelector('header') ,
    mainMenuList = document.querySelectorAll('.mainmenu > li'),
    subMenu = document.querySelectorAll('.subMenu'),
    headerHeight = header.offsetHeight,
    subMenuHeight = 0;

//for(var i=0; i<subMenu.length; i++){
//  if(subMenu[i].offsetHeight > subMenuHeight){
//    subMenuHeight = subMenu[i].offsetHeight;
//  }
//}

for(var j=0; j<mainMenuList.length; j++){
  mainMenuList[j].addEventListener('mouseover',function(){
    subMenuHeight = this.querySelector('ul').offsetHeight;
    header.style.height = headerHeight + subMenuHeight +'px' ;
  });

  mainMenuList[j].addEventListener('mouseout',function(){
    header.style.height = headerHeight + 'px';
  });

}
