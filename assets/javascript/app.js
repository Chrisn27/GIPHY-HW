$(document).ready(function() {

var topics = ["Albus Dumbledore", "Alastor Moody", "Kingsley Shacklebolt", "Harry Potter", "Ron Weasley", "Hermione Granger", "Severus Snape", "Rubeus Hagrid", "Remus Lupin", "Peter Pettigrew", "Sirius Black", "James Potter", "Lily Potter", "Bill Weasley", "Molly Weasley", "Charlie Weasley"];

	// initialize and load buttons for topics, adds ootp class to target dynamically created buttons on press
	function initialize() {

		$("#orderButtons").empty();

		for (var i = 0; i < topics.length; i++) {

			var orderButton = $("<button>");
			orderButton.addClass("ootp");
			orderButton.addClass("btn");			
			orderButton.addClass("btn-primary");
			orderButton.css("color", "orange");
			orderButton.text(topics[i]);
			orderButton.attr("order-input", topics[i]);
			$("#orderButtons").append(orderButton);

		}

	}

initialize();

	// function to call gihpy api based on button pressed
	function giphy() {

	$("#orderGifs").empty();

	console.log("Test");
	var character = $(this).attr("order-input");

	var url = "http://api.giphy.com/v1/gifs/search";
	url += '?' + $.param({
		'q': character,
		'limit': 10,
		'rating': 'pg-13',
		'fmt': 'json',
		'api_key': 'dc6zaTOxFJmzC'
	})
	
		$.ajax({
			url: url,
			method: "GET"
		}).done(function(response) {

			var results = response.data;

				//console.log(url);
				//console.log(response);
				//console.log(character);

			for (var i = 0; i < results.length; i++) {

				var orderDiv = $("<div class='item'>");
				var rating = results[i].rating;
				var p = $("<p>").text("Rating: " + rating);

				var orderImage = $("<img>");
				orderImage.attr("src", results[i].images.fixed_height.url);
				orderImage.attr("data-state", "animate");
				orderImage.attr("data-animate", results[i].images.fixed_height.url);
				orderImage.attr("data-still", results[i].images.fixed_height_still.url);
				orderImage.addClass("gif");
				orderImage.attr("id", "gifs" + [i]);

				orderDiv.prepend(p);
				orderDiv.prepend(orderImage);

				$("#orderGifs").append(orderDiv);

			}
		})

	}

	//adds button by pushing input to topics array
	$("#addbutton").click(function(event) {

		event.preventDefault();

		var newButton = $("#portKey").val().trim();

		topics.push(newButton);
	
		initialize();

	})
	
	// calls giphy function on ootp press
	$(document).on("click", ".ootp", giphy);

	/*TO DO LIST:

	Pause/Start gifs on click, might have to change code up a bit
	
	*/

	$(document).on("click", ".gif", function() {

		var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "animate") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      } else {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      }
    })

	

});

