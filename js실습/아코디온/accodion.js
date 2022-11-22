var btnCollapse = document.getElementById('btn-collapse') ,
    heading = document.getElementsByClassName('panel-heading') ,
    question = document.getElementsByClassName('panel-question') ,
    answer = document.getElementsByClassName('panel-body');

//제목을 클릭하면 할 일 (클래스는 복수형 = 반복문으로 처리)
for(var i=0; i<heading.length; i++){
  heading[i] = addEventListener('click',function(ev){
    for(var j=0; j<question.length; j++){
      question[j].classList.remove('active');
    } // question마다 할 일
    ev.target.parentNode.classList.add('active');
    activateBody();
  });
}

function activateBody(){
  for(var k=0; k<answer.length; k++){
    answer[k].style.display = 'none';
  }
  var activePanel = document.querySelector('.panel-question.active .panel-body');
  activePanel.style.display = 'block';
}
activateBody();

btnCollapse.addEventListener('click',function(){
  for(var k=0; k<answer.length; k++){
    answer[k].style.display = 'none';
  }
});
