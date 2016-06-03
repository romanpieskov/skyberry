
$(document).ready(function(){

$('.slider').slick({
    autoplay: true,
    dots: false,
    slidesToShow: 1,
    responsive: false,
    autoplaySpeed: 4000
  });

$('.responsive').slick({
  dots: false,
  // infinite: true,
  speed: 300,
  slidesToShow: 4,
  centerMode: true,
  variableWidth: true,
  responsive: false
});


$('.news-item').slick({
    autoplay: false,
    dots: false,
    slidesToShow: 1,
    responsive: false
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
