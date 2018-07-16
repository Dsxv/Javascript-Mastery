$(document).ready(function(){
var $sec=$(".second") ;
var $min=$(".minute") ;
var $hour=$(".hour") ;
  function time(p){
var date=new Date();
var m=date.getMinutes();
if(p=='s')
return (date.getSeconds()*6+90)+'deg';
if(p=='m')
return (m*6+90)+'deg';
if(p=='h')
return ((date.getHours()%12 +m/60)*30+90)+'deg';};


setInterval(function(){
$sec.css({"transform":"rotate("+time('s')+ ")"}) ;
$min.css({"transform":"rotate("+time('m')+ ")"}) ;
$hour.css({"transform":"rotate("+time('h')+ ")"}) ;
},1000) ;
})
