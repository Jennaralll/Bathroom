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

	var bathRoomData = [
		{company: "Noodles & Company",
		status: "Customers only",
		cleanliness: "green",
		coordinates: {lat: 37.789671, lng: -122.400564}},
		{company: "Peet's Coffee and Tea",
		status: "Customers only",
		cleanliness: "green", 
		coordinates: {lat:37.784618, lng:-122.406799}},
		{company: "Ghiradelli",
		status: "Customers only",
		cleanliness: "green", 
		coordinates: {lat:37.788515, lng:-122.402037}},
		{company: "Andersen Bakery",
		status: "Customers only", 
		cleanliness: "green", 
		coordinates: {lat: 37.790398, lng:-122.399244}},
		//second object here
	]

    // Testing the addMarker function
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


// first refactor
// 	put all of the your data into the bathroomData data structure
// 	putMarkersOnMap: write a method that cycles through the data structure and places markers on the map (follow Hanah's example)

// second refactor
// 	html: have a button that removes all markers (when clicked, it call the remove all markers method)
// 	jquery: write removeAllMarkers

// third refactor
// 	need to add buttons to the front page somewhere near the map that indicate cleanly status
// 	in jquery, you are going to have three listeners - one for each button.  If the green button gets clicked, then display all of the markers with the status of clean
// 		on green button click
// 			removeAllMarkers()
// 			putMarkersOnMap(green)
// 	putMarkersOnMap(status)
// 		for each marker dictionary/object literal in bathroomData array
// 			check if the status that is passed in is equal to green
// 			  add the marker to the map that has the status green
// 			else if status that is passed in is equal to yellow
// 				add marker to the map that has the status
