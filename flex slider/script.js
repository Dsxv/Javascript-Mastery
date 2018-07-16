$(document).ready(function() {
  $(".main>div").addClass("inactive");
  $(".main>div>div").css({
    display: "none"
  });

  $(".main>div").click(function(event) {

    $(this).toggleClass("active inactive ");



    if ($(this).hasClass("active")) {
      var x = $(this);
      x.siblings().get().forEach(function(i) {
        i = $(i);
        i.removeClass("active").addClass("inactive").children().fadeOut();
      })
      setTimeout(function() {
        x.children().fadeIn("slow");
      }, 400);
    }

    if ($(this).hasClass("inactive")) {
      var x = $(this);
      setTimeout(function() {
        x.children().fadeOut()
      }, 100);
    }





  })
})
