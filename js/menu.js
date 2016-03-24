$(document).ready(function(){
 
  /*  var touch = $('#touch-menu');
    var menu = $('.mainmenu');
 
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

      // Look for .hamburger
    var hamburger = document.querySelector(".hamburger");
    // On click
    hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
        
  });

 */
    var $hamburger = $(".hamburger");
    var $mainmenu = $(".mainmenu");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
        $mainmenu.toggleClass("mobilemenu");
  });    
    
    
});

