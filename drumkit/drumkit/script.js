$(document).ready( function(){
  $("html").keydown(function(event){
    switch (event.which) {

case 65: var x = $("#1") ;
$(".1").removeClass("before").addClass("after").delay(50).queue(function(){ x[0].play();
$(this).removeClass("after").addClass("before").dequeue();
});break;

case 83: var x = $("#2") ;
$(".2").removeClass("before").addClass("after").delay(50).queue(function(){ x[0].play();
$(this).removeClass("after").addClass("before").dequeue();
});break;

case 68: var x = $("#3") ;
$(".3").removeClass("before").addClass("after").delay(50).queue(function(){ x[0].play();
$(this).removeClass("after").addClass("before").dequeue();
});break;

case 70: var x = $("#4") ;
$(".4").removeClass("before").addClass("after").delay(50).queue(function(){ x[0].play();
$(this).removeClass("after").addClass("before").dequeue();
});break;

case 71: var x = $("#5") ;
$(".5").removeClass("before").addClass("after").delay(50).queue(function(){ x[0].play();
$(this).removeClass("after").addClass("before").dequeue();
});break;

case 72: var x = $("#6") ;
$(".6").removeClass("before").addClass("after").delay(50).queue(function(){ x[0].play();
$(this).removeClass("after").addClass("before").dequeue();
});break;

case 74: var x = $("#7") ;
$(".7").removeClass("before").addClass("after").delay(50).queue(function(){ x[0].play();
$(this).removeClass("after").addClass("before").dequeue();
});break;

case 75: var x = $("#8") ;
$(".8").removeClass("before").addClass("after").delay(50).queue(function(){ x[0].play();
$(this).removeClass("after").addClass("before").dequeue();
});break;

case 76: var x = $("#9") ;
$(".9").removeClass("before").addClass("after").delay(50).queue(function(){ x[0].play();
$(this).removeClass("after").addClass("before").dequeue();
});break;


      default:;

    }
  }); }) ;
