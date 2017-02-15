


var el = document.querySelectorAll('.circle');
var ol = document.querySelectorAll('.male');
var o = el[0].offsetWidth;
var line = document.querySelectorAll('.line');
function kasztan(x){
el[x].style.width="270px";// if checked ...
line[x].style.borderTop="1px solid grey";
el[x].style.border="10px solid white";
      // if not checked ...
  }



function kasztan1(x){
  el[x].style.width="246px";
line[x].style.borderTop="none";
el[x].style.border="10px solid #35baf5";
}

var lel = document.querySelector('.jumbotron').scrollHeight;

console.log(lel);
