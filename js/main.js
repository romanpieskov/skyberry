//  $(document).ready(function(){
//             $('.responsive').slick({
//   infinite: false,
//   arrows: true,
//   speed: 300,
//   variableWidth: true,
//   slidesToShow: 4,
//   slidesToScroll: 2,
//     dots: false,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: false
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });
//                 });




// $('.news-item').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   centerMode: true
// });


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
});
