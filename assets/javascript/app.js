$(document).ready(function() {

var topics = ["Albus Dumbledore", "Alastor Moody", "Kingsley Shacklebolt", "Harry Potter", "Ron Weasley", "Hermione Granger", "Severus Snape",
	"Rubeus Hagrid", "Remus Lupin", "Peter Pettigrew", "Sirius Black", "James Potter", "Lily Potter", "Bill Weasley", "Molly Weasley", 
	"Charlie Weasley"];

var character = $(this).attr("order-input");

var url = "http://api.giphy.com/v1/gifs/search";
url += '?' + $.param({
	'q': character,
	'limit': 10,
	'rating': 'pg-13',
	'fmt': 'json',
	'api_key': 'dc6zaTOxFJmzC'
})

	// initialize and load buttons for topics
	function initialize() {

		for (var i = 0; i < topics.length; i++) {

			var orderButton = $("<button>");
			orderButton.addClass("btn");
			orderButton.addClass("btn-primary");
			orderButton.css("color", "orange");
			orderButton.text(topics[i]);
			orderButton.attr("order-input", topics[i]);
			$("#orderButtons").append(orderButton);


		}
			console.log(url);
	}

	// onclick, call giphy based on button pushed

	$("button").click(function() {

	console.log("Test");

	})

		$.ajax({
			url: url,
			method: "GET"
		}).done(function(response) {

			
		})
	 

initialize();

});

