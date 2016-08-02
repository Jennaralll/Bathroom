var bathRoomData;

function readDataAndAppend(data){
    var rows = [];
    var cells = data.feed.entry;
    
    for (var i = 0; i < cells.length; i++){
        var rowObj = {};
        rowObj.timestamp = cells[i].title.$t;
        var rowCols = cells[i].content.$t.split(',');
        for (var j = 0; j < rowCols.length; j++){
            var keyVal = rowCols[j].split(':');
            rowObj[keyVal[0].trim()] = keyVal[1].trim();
        }
        rows.push(rowObj);
    }
    
    console.log(rows);

    bathRoomData = rows;
} 




$(document).ready(function() {

	  $.ajax({
	  	url: "https://spreadsheets.google.com/feeds/list/1Gw9qdMt15gnDnab2osAF2CxTBumi-fMSJs04rQxqNss/1/public/basic?alt=json",
	  	success: function(data){
	  		readDataAndAppend(data);
	  	}
	  })	
  
  	//sticking data into the google spreadsheet
	$("#bathroom-form").submit(function(event){
		event.preventDefault();
		var data = $(this).serialize();
		console.log(data);
	
		$.ajax({
			url: "https://script.google.com/macros/s/AKfycbwfVi8Ye0M41iotzH9HikJ_fY6_aUnjTH2c8nUCfFmTUO3Vtvkr/exec",
			type: "POST", 
			data: data,
		}).done(function(data) {
				console.log("success!")
		})
	});

	var mapOptions = {
		    zoom: 15,
		    center: {lat: 37.789, lng: -122.399}
	}	

    map = new google.maps.Map(document.getElementById("map"), mapOptions);


  $(".button1").click(function() {
  	console.log("button1 clicked");
  	setMapOnAll(null);
  	setMarkers("Clean");
  })


  $(".button3").click(function() {
  	console.log("button2 clicked");
  	setMapOnAll(null);
  	setMarkers("Dirty"); 	
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


var setMapOnAll= function (map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }
 

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
			if (bathRoomData[i].cleanliness == "Clean") {
				color_status = "7CFC00";
			} else if (bathRoomData[i].cleanliness == "Dirty") {
				color_status = "FF0000";
			}


			var pin = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + color_status,
        	new google.maps.Size(21, 34));


			var marker = new google.maps.Marker({
			    position: {lat: parseFloat(bathRoomData[i].lat), lng: parseFloat(bathRoomData[i].lng)},
			    title: bathRoomData[i].company,
			    map: map,
			    icon: pin
		  	});
		  	console.log(marker);

			var infowindow = new google.maps.InfoWindow({
	    		content: bathRoomData[i].status + " " + bathRoomData[i].company
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

// var bathRoomData = [
// 		{company: "Noodles & Co",
// 		status: "Private",
// 		cleanliness: "clean",
// 		coordinates: {lat: 37.789671, lng: -122.400564}},
// 		{company: "Boudin Bakery",
// 		status: "Customers Only",
// 		cleanliness: "green",
// 		coordinates: {lat: 37.788803, lng: -122.401672}},
// 		{company: "Super Duper Burger",
// 		status: "No purchase necessary",
// 		cleanliness: "green",
// 		coordinates: {lat: 37.786942, lng: -122.404037}},
// 		{company: "Oasis Grill",
// 		status: "No purchase necessary",
// 		cleanliness: "green",
// 		coordinates: {lat: 37.786861, lng: -122.403697}},
// 		{company: "Macy's",
// 		status: "No purchase necessary",
// 		cleanliness: "green",
// 		coordinates: {lat: 37.786959, lng: -122.405973}},
// 		{company: "Portico Restaurant",
// 		status: "Customers Only",
// 		cleanliness: "green",
// 		coordinates: {lat: 37.789791, lng: -122.401145}},
// 		{company: "Old Navy",
// 		status: "No purchase necessary",
// 		cleanliness: "green",
// 		coordinates: {lat: 37.785320, lng: -122.405972}},
// 		{company: "Ginto Izakaya Japanaise",
// 		status: "No purchase necessary",
// 		cleanliness: "green",
// 		coordinates: {lat: 37.788335, lng: -122.402948}},
// 		{company: "Mazarine Coffee",
// 		status: "No purchase necessary",
// 		cleanliness: "green",
// 		coordinates: {lat: 37.787601, lng: -122.404064}},
// 		{company: "Peet's Coffee and Tea",
// 		status: "Customers Only",
// 		cleanliness: "green", 
// 		coordinates: {lat:37.784618, lng:-122.406799}},
// 		{company: "Ghiradelli",
// 		status: "Customers Only",
// 		cleanliness: "green", 
// 		coordinates: {lat:37.788515, lng:-122.402037}},
// 		{company: "Andersen Bakery",
// 		status: "Customers Only", 
// 		cleanliness: "green", 
// 		coordinates: {lat: 37.790398, lng:-122.399244}},
// 		{company: "Public Bathroom", 
// 		status: "No purchase necessary",
// 		cleanliness: "red", 
// 		coordinates: {lat: 37.792730, lng:-122.396781}}, 
// 		{company: "Public Bathroom", 
// 		status: "No purchase necessary",
// 		cleanliness: "red", 
// 		coordinates: {lat: 37.787574, lng:-122.407545}}
// 		//second object here
// 	]



// {company: "Public Bathroom", 
// 		status: "No purchase necessary",
// 		cleanliness: "red", 
// 		coordinates: {lat: 37.787574, lng:-122.407545}}


// {company: "Public Bathroom", 
// 		status: "No purchase necessary",
// 		cleanliness: "red", 
// 		lat: 37.787574, 
// 		lng:-122.407545}