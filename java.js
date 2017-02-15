
var x = 0;
var el = document.querySelector('.red-dots-active');
var el1 = document.getElementsByClassName('red-dots');
var names = document.querySelector('.name');
var job = document.querySelector('.occupation');
var descri = document.querySelector('.descri');
var el2 = document.querySelectorAll('.hook');
function plus(){
el2[x].style.width="0px";
el2[x].style.height="0px";
x=x+1;
  if (x>2){
    x=0;
  }
change();
}

function minus(){
  el2[x].style.width="0px";
  el2[x].style.height="0px";
x=x-1;
  if (x<0){
    x=2;
  }
  else{

  }
change();
}
function change(){
var el = document.querySelector('.red-dots-active')
var el1 = document.getElementsByClassName('red-dots');

el.classList.remove("red-dots-active");
el1[x].classList.add("red-dots-active");

if (x==0){


    el2[0].style.width="250px";
    el2[0].style.height="200px";
    el2[0].style.transition="0.5s";
}

if(x==1){

  el2[1].style.width="250px";
  el2[1].style.height="200px";
  el2[1].style.transition="0.5s";

}
if(x==2){


      el2[2].style.width="250px";
      el2[2].style.height="200px";
      el2[2].style.transition="0.5s";
  }
}

function menu(){
var menu = document.querySelector('.mobile-menu');
menu.classList.toggle('mobile-menu-activated');
}



var town = document.querySelectorAll('.town-span');
var position = 0;
var orange = document.querySelectorAll('.red-circle');

function hi(y){
town[position].classList.remove('animate');
orange[position].classList.remove('red-circle-active');
town[position].classList.add('item');
position += y;
if(position<0){
  position=4;

}
if(position==5){
  position=0;
}
town[position].classList.remove('item');
orange[position].classList.add('red-circle-active');
town[position].classList.add('animate');
}
