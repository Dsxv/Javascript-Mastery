$(document).ready(function(){
  console.log("hello!!") ;
  var pos=0,l=0,a='-5px 0px';
  setInterval(function(){
  $('.animate').css({'background-position': a});
  a=(-83*(pos+1)-5)+'px 0px'; l=l+1; pos=l%11;  console.log("running");},70);

});
