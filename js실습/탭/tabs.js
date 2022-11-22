
var targetLink = document.querySelectorAll('.tab-menu a');
var tabContent = document.querySelectorAll('#tab-content > div');

for(var i=0; i<targetLink.length; i++){
  targetLink[i].addEventListener('click',function(ev){
    ev.preventDefault();
    var orgTarget = ev.target.getAttribute('href');
    var tabTarget = orgTarget.replace('#','');

    for(var j=0; j<tabContent.length; j++){
      tabContent[j].style.display ='none';
    }
    document.getElementById(tabTarget).style.display = 'block';

    for(var k=0; k<targetLink.length; k++){
      targetLink[k].classList.remove('active');
      ev.target.classList.add('active');
    }
  });
}

document.getElementById('tabs-1').style.display = 'block';
