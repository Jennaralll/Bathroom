function initMap() {
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
	    center: {lat: 37.789, lng: -122.399},
	    zoom: 15
	});

	// map.setMapTypeId(google.maps.MapTypeId.);s

    // Function for adding a marker to the page.
    function addMarker(location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });

        return marker;
    }

    function addInfoWindow(marker, message) {
    	var location = marker;
		var infowindow = new google.maps.InfoWindow({
			content: message
		});

		google.maps.event.addListener(marker, "click", function(){
			infowindow.open(map, marker);
		});

	}

    // Testing the addMarker function
    var noodz = new google.maps.LatLng(37.789671, -122.400564);
    var noodzMarker = addMarker(noodz);

	var peetz = new google.maps.LatLng(37.784618, -122.406799);
	var peetzMarker = addMarker(peetz);

	var ghir = new google.maps.LatLng(37.788515, -122.402037);
	var ghirMarker = addMarker(ghir);

	var bread = new google.maps.LatLng(37.790398, -122.399244);
	var breadMarker = addMarker(bread);

	var booty = new google.maps.LatLng(37.788803, -122.401672);
	var bootyMarker = addMarker(booty);

	var supburg = new google.maps.LatLng(37.786942, -122.404037);
	var supburgMarker = addMarker(supburg);

	var oasis = new google.maps.LatLng(37.786861, -122.403697);
	var oasisMarker = addMarker(oasis);

	var macys = new google.maps.LatLng(37.786959, -122.405973);
	var macysMarker = addMarker(macys);

	var port = new google.maps.LatLng(37.789791, -122.401145);
	var portMarker = addMarker(port);

	var oldnavy = new google.maps.LatLng(37.785320, -122.405972);
	var oldnavyMarker = addMarker(oldnavy);

	var ginto = new google.maps.LatLng(37.788335, -122.402948);
	var gintoMarker = addMarker(ginto);

	var maz = new google.maps.LatLng(37.787601, -122.404064);
	var mazMarker = addMarker(maz);


	addInfoWindow(noodzMarker, "Noodles & Company");
	addInfoWindow(peetzMarker, "Peets Coffee and Company");
	addInfoWindow(ghirMarker, "Ghirardelli");
	addInfoWindow(breadMarker, "Andersen Bread");
	addInfoWindow(bootyMarker, "Boudin Bakery");
	addInfoWindow(supburgMarker, "Super Duper Burger");
	addInfoWindow(macysMarker, "Macy's Men");
	addInfoWindow(portMarker, "Portico Restaurant");
	addInfoWindow(oldnavyMarker, "Old Navy");
	addInfoWindow(gintoMarker, "Ginto Izakaya Japanaise");
	addInfoWindow(mazMarker, "Mazarine Coffee");
	addInfoWindow(oasisMarker, "Oasis Grill");
	

}
