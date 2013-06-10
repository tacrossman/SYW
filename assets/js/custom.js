function initialize() {
  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var myLatlng2 = new google.maps.LatLng(-23.363882,120.044922);

  var mapOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Mrs Smith</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Mrs Smith</b>, teaches English.</p>'+
      '<p><a href="#">View Profile</a>'+
      '</div>';

  var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Mrs Jones</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Mrs Jones</b>, teaches Science.</p>'+
      '<p><a href="#">View Profile</a>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 400
  });

  var infowindow2 = new google.maps.InfoWindow({
      content: contentString2,
      maxWidth: 400
  });

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Mrs Smith - Uluru School'
  });

  var marker2 = new google.maps.Marker({
      position: myLatlng2,
      map: map,
      animation: google.maps.Animation.DROP,      
      title: 'Mrs Jones - Walalala School'
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  
  google.maps.event.addListener(marker2, 'click', function() {
    infowindow2.open(map,marker2);
  });

}

google.maps.event.addDomListener(window, 'load', initialize);