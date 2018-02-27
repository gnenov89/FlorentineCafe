(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    var list = $('h1, h3, h5, h6, p, img.about').fadeIn(4000);
    $('.carousel').carousel();
    // $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.

// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4); // Move prev n times.

// Set to nth slide
$('.carousel').carousel('set', 4);

// Destroy carousel
$('.carousel').carousel('destroy');
      


  }); // end of document ready
})(jQuery); // end of jQuery name space