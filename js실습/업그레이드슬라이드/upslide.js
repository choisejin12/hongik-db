var slidewrapper = document.querySelector('.container'),
    slideContainer = document.querySelector('.slider-container'),
    slide = document.getElementsByClassName('slide'),
    navPrev = document.getElementById('prev'),
    navNext = document.getElementById('next'),
    slideHeight = 0,
    slidecount = slide.length,
    clickcount = 0;

for(var i=0; i<slidecount; i++){
  if(slideHeight < slide[i].offsetHeight){
    slideHeight = slide[i].offsetHeight;
  }
}

slidewrapper.style.height = slideHeight+'px';
slideContainer.style.height = slideHeight+'px';

for(var j=0; j<slidecount; j++){
  slide[j].style.left = j * 100 +'%';
}

function goToSlide(num){
  slideContainer.style.left = -100 * num +'%';
  slideContainer.classList.add('animated');
  clickcount = num;
  console.log(clickcount);
}

navNext.addEventListener('click',function(){
  //goToSlide(clickcount +1);
  if(clickcount == slidecount - 1){
    //navNext.classList.add('disabled');\
    goToSlide(0);
  }
  else{
    //navNext.classList.remove('disabled');
    goToSlide(clickcount + 1);

  }
});

navPrev.addEventListener('click',function(){
  //goToSlide(clickcount -1);
  if(clickcount == 0){
    goToSlide(slidecount-1);
    //navPrev.classList.add('disabled');
  }
  else{
    //navPrev.classList.remove('disabled');
    goToSlide(clickcount-1);
  }

});
