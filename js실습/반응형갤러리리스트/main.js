const imagelist = document.querySelector(".image-list");
const btns = document.querySelectorAll(".view-options button");
const imageListitems = document.querySelectorAll(".image-list li");
const active = "active";
const listView = "list-view";
const gridView = "grid-view";
const dNone = "d-none";

//버튼 활성화

for( const btn of btns){
  btn.addEventListener('click',function(){
    const parent = this.parentElement;
    document.querySelector(".view-options .active").classList.remove(active);
    parent.classList.add(active);

    if(parent.classList.contains("show-list")){
      document.querySelector(".zoom").classList.add(dNone);
      imagelist.classList.remove(gridView);
      imagelist.classList.add(listView);
    }
    else{
      document.querySelector(".zoom").classList.add(dNone);
      imagelist.classList.remove(listView);
      imagelist.classList.add(gridView);
    }
  });
}

//리스트 너비 조절 Range

const rangeInput = document.querySelector('input[type="range"]');

rangeInput.addEventListener('input',function(){
  document.documentElement.style.setProperty("--minRangeValue", `${this.value}px`);

});

// 검색키워드 필터
const cations = document.querySelectorAll(".image-list figcaption p:first-child");
const myArray=[];
let counter = 1;

for(const cation of cations){
  myArray.push({
    id:counter++,
    text:cation.textContent
  });
}

const searchInput = document.querySelector('input[type="search"]');
const photoCounter = document.querySelector(".toolbar .counter span");


searchInput.addEventListener('keyup',keyupHandler);

function keyupHandler(){
  for( const item of imageListitems){
    item.classList.add(dNone);
  }
  const keywords = this.value;

  const filterArray = myArray.filter(el => el.text.toLowerCase().includes(keywords.toLowerCase()));

  if(filterArray.length > 0){
    for(const el of filterArray){
      document.querySelector(`.image-list li:nth-child(${el.id})`).classList.remove(dNone);
      photoCounter.textContent=filterArray.length;
    }
  }
}
