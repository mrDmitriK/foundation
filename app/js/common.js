$(function() {
// cкрол вниз
	$(".mouse-icon").click(function(){
    $("html, body").animate({
      scrollTop : $(".header_middle").offset().top
    }, 900);
  });
// скрол HOME
$(".HOME").click(function(){
    $("html, body").animate({
      scrollTop : $(".page-header").offset().top
    }, 900);
  });
//ABOUT
$(".ABOUT").click(function(){
    $("html, body").animate({
      scrollTop : $(".main_about").offset().top
    }, 900);
  });
// PORTFOLIO
$(".PORTFOLIO").click(function(){
    $("html, body").animate({
      scrollTop : $(".main_portfolio").offset().top
    }, 900);
  });
// CONTACT
$(".CONTACT").click(function(){
    $("html, body").animate({
      scrollTop : $(".contact").offset().top
    }, 1000);
  });

// Отправка данных

  $("a[href='#callback']").click(function() {
    var dataForm = $(this).data("form");
    var dataText = $(this).data("text");
    $(".form-callback").text(dataText);
    $(".form-callback [name=admin-data]").val(dataForm);
  });


});

$("body").append('<div class="top"><i class="fa fa-angle-double-up">');

$("body").on("click", ".top", function(){
    $("html, body").animate({scrollTop: 0},"slow");
});


  $(window).scroll(function() {
    if($(this).scrollTop() > $(this).height()) {
      $(".top").addClass("active");
    } else {
      $(".top").removeClass("active");
    }
  });

