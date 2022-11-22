var img = document.querySelectorAll('.gallery img'),
    lightbox = document.getElementById('lightbox-overlay'),
    lightboxImg = lightbox.querySelector('img');

for(var i=0; i<img.length; i++){
  img[i].addEventListener('click',function(ev){
    var attribute = ev.target.getAttribute('data-lightbox');
    lightboxImg.setAttribute('src', attribute);
    lightbox.classList.add('visible');
  });
}

lightbox.addEventListener('click',function(ev){
  this.classList.remove('visible');
})
