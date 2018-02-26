

  function initMap(){

    // Map options
    var options = {
      zoom:13,
      center:{lat:42.3643,lng:-71.0538}
    }
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
  
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById('myImg');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
      modal.style.display = "none";
  }