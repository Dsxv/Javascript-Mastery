

$(function(){
var main ;
$.ajax({

  url:"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",
  success:  function(data){
     $("#input").keyup(function(){
          var k= JSON.parse(data);
        var text=  $("#input")[0].value.toLowerCase();
         $("#result li").remove();
          if(text.length>1)
      {   k.map(i=>{
              if((i.city.toLowerCase()).includes(text))
              {$("#result").append('<li></li>');
              $("#result li:last").append(i.city).fadeIn(600);}


            }  )


         }

     });
  }
}) ;
}) ;
