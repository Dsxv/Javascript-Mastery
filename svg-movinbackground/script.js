$(document).ready( function(){
  $("body,html").mousemove(function(event){
    var friction=.5;
  var x=(event.pageX/683)*-34*friction+'px';
  var y=(event.pageY/360)*-65*friction+'px';
    $("body").css({"background-position" : x+" "+y}); });
  });
