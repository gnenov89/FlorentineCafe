

  function initMap(){

    // Map options
    var options = {
      zoom:13,
      center:{lat:42.3643,lng:-71.0538}
    };
    // New map
    var map = new 
    google.maps.Map(document.getElementById('map'), options);

    // New Marker
     var marker = new google.maps.Marker({
         position:{lat:42.3643,lng: -71.0538},
         map:map
         
     });

    //  var infoWindow = new google.maps.infoWindow({
    //      content:'<h1>333 Hanover Str.|Boston, MA, 02113'
    //  });
     var infoWindow = new google.maps.InfoWindow({
        content:'<h2>333 Hanover Str.|Boston, MA, 02113</h2>'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
      

     marker.addListener('click', function (){
         infoWindow.open(map, marker);
     });
  }

  function setupEvents() {
    if (typeof window.ontouchstart !== 'undefined') {
      view[0].addEventListener('touchstart', tap);
      view[0].addEventListener('touchmove', drag);
      view[0].addEventListener('touchend', release);
    }
    view[0].addEventListener('mousedown', tap);
    view[0].addEventListener('mousemove', drag);
    view[0].addEventListener('mouseup', release);
    view[0].addEventListener('mouseleave', release);
    view[0].addEventListener('click', click);
  }
  
  