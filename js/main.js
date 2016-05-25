
$(document).ready(function(){

$('.slider').slick({
    autoplay: false,
    dots: false,
    slidesToShow: 1,
    responsive: true
  });

$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  centerMode: true,
  variableWidth: true
});


$('.news-item').slick({
    autoplay: false,
    dots: false,
    slidesToShow: 1,
    responsive: true
  });

$('#up').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
});

var $hamburger = $(".btn-category");
 $hamburger.on("click", function(e) {
   $hamburger.toggleClass("is-active");
   $("aside").toggleClass("sm-none");
});


});
