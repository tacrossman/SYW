var map;

jQuery(function($) {
    $(document).ready(function() {
        var latlng = new google.maps.LatLng(-24.397, 130.644);
        var myOptions = {
            zoom: 4,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        google.maps.event.trigger(map, 'resize');

        $('a[href="#profile"]').on('shown', function(e) {
            google.maps.event.trigger(map, 'resize');
        });
        $("#map_canvas").css("width", 1100).css("height", 500);
    });
});


    $(document).ready(function(){
    var $container = $('#content');
$container.isotope({
  filter: '*',
  animationOptions: {
     duration: 750,
     easing: 'linear',
     queue: false,
   }
});

$('#nav a').click(function(){
  var selector = $(this).attr('data-filter');
    $container.isotope({ 
  filter: selector,
  animationOptions: {
     duration: 750,
     easing: 'linear',
     queue: false,
   
   }
  });
  return false;
});

});
