$( document ).ready(function() {
    var $hamburger = $(".hamburger");
     $hamburger.on("click", function(e) {
       $hamburger.toggleClass("is-active");
       $("#primary-menu").toggleClass("mobilemenu");
       $("#primary-menu").toggleClass("menu");
   });
});
