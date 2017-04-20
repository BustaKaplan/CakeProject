$(document).ready(function(){

$(".cakes").on('click', function(){
  $(".show-cakes").fadeIn();
  $(".show-other").fadeOut();
});

$(".other").on('click', function(){
  $(".show-cakes").fadeOut();
  $(".show-other").fadeIn();
});

});
