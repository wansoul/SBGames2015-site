function initMap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

    var myCenter = new google.maps.LatLng(-5.087387, -42.793947); // Rio Poty Hotel - Blue Tree
    var icone = 'img/pin.png';

    var isNight; //Setar boolean de acordo com a hora do dia

    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        //Controles do mapa
        panControl: false,
        streetViewControl: true,
	    zoomControl: true,
	    zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.RIGHT_BOTTOM
		},
	    mapTypeControl: true,
		scaleControl: false,
		overviewMapControl: false,
		scrollwheel: false,

        // The latitude and longitude to center the map (always required)
        center: myCenter, 


        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [ {
        	featureType:"all",
        	elementType:"all",
        	stylers:[
        		{ invert_lightness: false },
            	{ saturation:0 },
            	{ lightness:0 },
            	{ gamma:0 }
        	]
        } ]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
    	position: myCenter,
    	title: 'SBGames 2015 - Teresina-PI',
    	map: map,
    	animation: google.maps.Animation.DROP,
    	icon: icone
    });
    google.maps.event.addListener(marker, 'click', toggleBounce);

    function toggleBounce() {
		if (marker.getAnimation() != null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	}

}

initMap();
