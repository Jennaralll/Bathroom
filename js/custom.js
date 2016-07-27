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
		{company: "Noodles & Co",
		status: "Customers Only",
		cleanliness: "green",
		coordinates: {lat: 37.789671, lng: -122.400564}},
		{company: "Boudin Bakery",
		status: "Customers Only",
		cleanliness: "green",
		coordinates: {lat: 37.788803, lng: -122.401672}},
		{company: "Super Duper Burger",
		status: "No purchase necessary",
		cleanliness: "green",
		coordinates: {lat: 37.786942, lng: -122.404037}},
		{company: "Oasis Grill",
		status: "No purchase necessary",
		cleanliness: "green",
		coordinates: {lat: 37.786861, lng: -122.403697}},
		{company: "Macy's",
		status: "No purchase necessary",
		cleanliness: "green",
		coordinates: {lat: 37.786959, lng: -122.405973}},
		{company: "Portico Restaurant",
		status: "Customers Only",
		cleanliness: "green",
		coordinates: {lat: 37.789791, lng: -122.401145}},
		{company: "Old Navy",
		status: "No purchase necessary",
		cleanliness: "green",
		coordinates: {lat: 37.785320, lng: -122.405972}},
		{company: "Ginto Izakaya Japanaise",
		status: "No purchase necessary",
		cleanliness: "green",
		coordinates: {lat: 37.788335, lng: -122.402948}},
		{company: "Mazarine Coffee",
		status: "No purchase necessary",
		cleanliness: "green",
		coordinates: {lat: 37.787601, lng: -122.404064}},
		{company: "Peet's Coffee and Tea",
		status: "Customers Only",
		cleanliness: "green", 
		coordinates: {lat:37.784618, lng:-122.406799}},
		{company: "Ghiradelli",
		status: "Customers Only",
		cleanliness: "green", 
		coordinates: {lat:37.788515, lng:-122.402037}},
		{company: "Andersen Bakery",
		status: "Customers Only", 
		cleanliness: "green", 
		coordinates: {lat: 37.790398, lng:-122.399244}},
		//second object here
	]

	var marker;
      var markers = new Array();

      for (var i = 0; i < bathRoomData.length; i++) {
        new google.maps.Marker({
          position: bathRoomData[i].coordinates,
          title: bathRoomData[i].name,
          map: map
        });

        markers.push(marker);
      }
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
