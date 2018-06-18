
$(document).ready(function() {
	
	sessionStorage.clear();

	document.getElementById("movie-name-field").reset();

	var omdbID = config.OMDB_ID;
	var omdbKey = config.OMDB_KEY;

	// Get the input field
	var input = document.getElementById("movie-name");
	// Execute a function when the user releases a key on the keyboard
	// Must use `keyup`. `keydown` or anything else will not allow typing in field
	input.addEventListener("keyup", function(event) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Number 13 is the "Enter" key on the keyboard
		if (event.keyCode === 13) {
			// Trigger the button element with a click
			var movieName = $('#movie-name').val().replace(/\s/g, "+");
			console.log("movie name:",movieName);
			$.ajax({
				url: "http://www.omdbapi.com/?i=" + omdbID + "&apikey=" + omdbKey +"&t=" + movieName,
				type: "GET",
			}).done(function(res) {
				sessionStorage.res = JSON.stringify(res);
				console.log(sessionStorage.res);
			});
		}
		else {
			$( '#enter-btn' ).click(function() {
				var movieName = $('#movie-name').val().replace(/\s/g, "+");
				console.log("movie name:",movieName);
				$.ajax({
					url: "http://www.omdbapi.com/?i=tt3896198&apikey=a7c14add&t=" + movieName,
					type: "GET",
				}).done(function(res) {
					sessionStorage.res = JSON.stringify(res);
					console.log(res);
					// $( this ).addClass( "done" );
				});
			});
		}
	});
});
