$(document).ready(function() {
  var mapOptions = {
	    zoom: 15,
	    center: {lat: 37.789, lng: -122.399}
  }

  map = new google.maps.Map(document.getElementById("map"), mapOptions);


  $(".button1").click(function() {
  	console.log("button1 clicked");
  	setMapOnAll(null);
  	setMarkers("green");
  })


  $(".button3").click(function() {
  	console.log("button2 clicked");
  	setMapOnAll(null);
  	setMarkers("red"); 	
  })

  $(".button4").click(function(){
  	console.log("Show All clicked");
  	setMapOnAll(map);
  })

  $(".button5").click(function(){
  	console.log("Hide All clicked");
  	setMapOnAll(null);
  })

});



	// var icon = {
 //    url: "images/can.png", // url
 //    scaledSize: new google.maps.Size(20, 20) // scaled size
    // origin: new google.maps.Point(0, 0), // origin
    // anchor: new google.maps.Point(0, 0) // anchor
    // }


	// function addInfoWindow(marker, message) {

	// 	var infoWindow = new google.maps.InfoWindow({
	// 		content: message
	// 	});

	// 	google.maps.event.addListener(marker, 'click', function() {
	// 		infoWindow.open(map, marker);
	// 	})
	// }

	// addInfoWindow(bathRoomData[0].coordinates, bathRoomData[0].company);
	// addInfoWindow(bathRoomData[1].coordinates, bathRoomData[1].company);
	// addInfoWindow(bathRoomData[2].coordinates, bathRoomData[2].company);
	var setMapOnAll= function (map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }
  
	// var removeMarkers = function(){
		// for (var i = 0; i < markers.length; i++) {
			// markers[i].setMarkers(null);
	// 	}
	// 	markers = [];
	// }

	// removeMarkers();

      // To add the marker to the map, call setMap();
      // marker.setMap(map);


var markers = new Array();
var setMarkers = function(color){

	for (var i = 0; i < bathRoomData.length; i++) { 
		if (bathRoomData[i].cleanliness == color) {
			// if color is equal to green
				// variable color_status = "7CFC00"
			// else 
				// variable color_status = "FF0000";
			// set pin/icon variable equal to markerimage code with the color_status
			// make a marker
			// make an info window
			var color_status;
			if (bathRoomData[i].cleanliness == "green") {
				color_status = "7CFC00";
			} else if (bathRoomData[i].cleanliness == "red") {
				color_status = "FF0000";
			}


			var pin = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + color_status,
        	new google.maps.Size(21, 34));

			var marker = new google.maps.Marker({
			    position: bathRoomData[i].coordinates,
			    title: bathRoomData[i].company,
			    map: map,
			    icon: pin
		  	});

			var infowindow = new google.maps.InfoWindow({
	    		content: bathRoomData[i].company
		  	});

		  	google.maps.event.addListener(marker, 'click', function() {
	   			// infowindow.open(map, marker);
	   			infowindow.setContent( this.title );
	   			infowindow.open( map, this );
	  		});
	  		markers.push(marker)


		} // closes color if statement
	} //closing the for loop
} // closing the function


var map;

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
		{company: "Public Bathroom", 
		status: "No purchase necessary",
		cleanliness: "red", 
		coordinates: {lat: 37.792730, lng:-122.396781}}, 
		{company: "Public Bathroom", 
		status: "No purchase necessary",
		cleanliness: "red", 
		coordinates: {lat: 37.787574, lng:-122.407545}}
		//second object here
	]

