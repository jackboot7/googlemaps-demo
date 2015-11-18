function initialize(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(get_map, on_error, {enableHighAccuracy: true});
    }else{
        //En caso de no soportar geolocation, caer en un fallback.
        //
    }
}

function on_error(){
  var errors = { 
      1: 'Permission denied',
      2: 'Position unavailable',
      3: 'Request timeout'
        };
  console.log("We couldn't get the Location.\n Error: " + errors[error.code]);
}

function get_map(obj){

    var currentLatLng = new google.maps.LatLng(obj.coords.latitude, obj.coords.longitude) 

        var mapOptions = {
            center: currentLatLng,
            //center: {lat: 0, lng: -180},
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

    var marker = new google.maps.Marker({
        position: currentLatLng,
        title: "You are here!",
        animation: google.maps.Animation.BOUNCE
    });

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    map.data.loadGeoJson('data/data.json');

    map.data.setStyle({
        fillColor: 'red',
        strokeOpacity: 0.8,
        strokeWeight: 2
    });
    map.data.addListener('click', 
            function(event){
                alert("¡Hiciste click en el estado miranda!");
            });
    marker.setMap(map);


}
