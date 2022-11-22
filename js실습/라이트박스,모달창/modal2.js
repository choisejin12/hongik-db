var modalbtn = document.querySelector('.openbutton'),
    modalBox = document.querySelector('.modal'),
    bg = document.querySelector('.bg'),
    closebtn = document.querySelector('.closebtn');

modalbtn.addEventListener('click',function(){
  modalBox.classList.remove('hidden');
});

closebtn.addEventListener('click',function(){
  modalBox.classList.add('hidden');
})

bg.addEventListener('click',function(){
  modalBox.classList.add('hidden');
})
