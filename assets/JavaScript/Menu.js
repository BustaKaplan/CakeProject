$(document).ready(function(){
  $(window).on('scroll', function(){
    if ($(document).scrollTop() > 25) {
    $('nav').addClass('shrink');
    $('nav').addClass('nav-item-shrink');
    $('nav').css('position', 'fixed');
  } else {
    $('nav').removeClass('shrink');
  }

});

$(".cakes").on('click', function(){
  $(".show-cakes").fadeIn();
  $(".show-other").fadeOut();
});

$(".other").on('click', function(){
  $(".show-cakes").fadeOut();
  $(".show-other").fadeIn();
});

});
