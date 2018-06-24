
$(document).ready(function() {
	
	sessionStorage.clear();

	document.getElementById("movie-name-field").reset();

	var omdbID = config.OMDB_ID;
	var omdbKey = config.OMDB_KEY;
	console.log(omdbID + ", " + omdbKey);
	// Get the input field
	var input = document.getElementById("movie-name");
	// Execute a function when the user releases a key on the keyboard
	// Must use `keyup`. `keydown` or anything else will not allow typing in field
	input.addEventListener("keyup", function(event) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Number 13 is the "Enter" key on the keyboard
		if (event.key === 13) {
			console.log(event.key);
			// Trigger the button element with a click
			var movieName = $('#movie-name').val().replace(/\s/g, "+");
			// console.log("movie name:",movieName);
			// debugger;
			console.log("movie name by enter key:",movieName);
			console.log("http://www.omdbapi.com/?i=" + omdbID + "&apikey=" + omdbKey +"&t=" + movieName);
			$.ajax({
				url: "http://www.omdbapi.com/?i=" + omdbID + "&apikey=" + omdbKey +"&t=" + movieName,
				method: "GET"
			}).done(function(res){
				sessionStorage.setItem('omdbRes', JSON.stringify(res));
				console.log(res);
			}).fail(function() {
				alert( "error" );
			});
		}
		else {
			$( '#enter-btn' ).click(function() {
				var movieName = $('#movie-name').val().replace(/\s/g, "+");
				console.log("movie name by click:",movieName);
				console.log("http://www.omdbapi.com/?i=" + omdbID + "&apikey=" + omdbKey +"&t=" + movieName);
				$.ajax({
					url: "http://www.omdbapi.com/?i=" + omdbID + "&apikey=" + omdbKey +"&t=" + movieName,
					method: "GET"
				}).done(function(res){
					sessionStorage.setItem('omdbRes', JSON.stringify(res));
					console.log(res);
				}).fail(function() {
					alert( "error" );
				});
			});
		}
	});

	// https://stackoverflow.com/questions/14754619/jquery-ajax-success-callback-function-definition

});
