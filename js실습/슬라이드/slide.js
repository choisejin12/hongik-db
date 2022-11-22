var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIndex = 0,
    slideCount = slide.length,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    slidewidth = 300,
    slidemargin = 30;

    slides.style.width = (slidewidth + slidemargin)*slideCount - slidemargin +'px';

function moveslide(num){
  slides.style.left = - (slidewidth + slidemargin) * num +'px';
  currentIndex = num;
}

nextBtn.addEventListener('click', function () {
  if(currentIndex < slideCount - 3){
    moveslide(currentIndex + 1);
  }
  else{
    moveslide(0);
  }
});

prevBtn.addEventListener('click', function () {
  if(currentIndex > 0){
    moveslide(currentIndex - 1);
  }
  else{
    moveslide(slideCount - 3);
  }
});
