(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    var list = $('h1, h3, h5, h6, p, img.about').fadeIn(4000);
   
    $('.carousel').carousel({full_width: true});
    $('.materialboxed').materialbox();
    // Materialize.toast('I am a toast!', 4000)
      


  }); // end of document ready
})(jQuery); // end of jQuery name space