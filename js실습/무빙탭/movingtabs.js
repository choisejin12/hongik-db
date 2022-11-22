const tabMenu = document.querySelectorAll('.tab-menu li');
const tabContent = document.querySelectorAll('#tab-content > div');
const highlight = document.querySelector('.highlight');

tabMenu.forEach(function(item,idx){
  item.addEventListener('click',function(e){
    e.preventDefault();
    showContent(idx);
    moveHighLight(idx);
  });
});

function showContent(num){
  tabContent.forEach(function(item){
    item.style.display = 'none';
  });
  tabContent[num].style.display = 'block';
}

function moveHighLight(num){
  const newLeft = tabMenu[num].offsetLeft;
  const newWidth = tabMenu[num].offsetWidth;
  highlight.style.left= newLeft + 'px';
  highlight.style.width= newWidth + 'px';
}
