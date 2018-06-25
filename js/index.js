
$(document).ready(function() {
	
	// sessionStorage.clear();

	document.getElementById("movie-name-field").reset();

	var omdbID = config.OMDB_ID;
	var omdbKey = config.OMDB_KEY;
	console.log(omdbID + ", " + omdbKey);
	// // Get the input field
	// var input = document.getElementById("movie-name");
	
	function getMovieData(){
		var movieName = $('#movie-name').val().replace(/\s/g, "+");
		if (movieName === '') {
			alert ('Enter a Movie Title Bro!');
			window.location.href = "./index.html";
		}
		else {
			$.ajax({
				url: "http://www.omdbapi.com/?i=" + omdbID + "&apikey=" + omdbKey +"&t=" + movieName,
				method: "GET"
			}).done(function(res){
				sessionStorage.setItem('omdbRes', JSON.stringify(res));
				// console.log(res);
				window.location.href = "./html/results.html";
			}).fail(function() {
				alert( "try again" );
				window.location.href = "./index.html";
			});
		}
	}

	$('input').keypress(function(event){
		console.log("pressed**************");
		console.log(event.which);
		if (event.which === 13) {
			getMovieData();
			// stop .click from firing
			event.preventDefault();
		}
	});

	$('#enter-btn').click(function() {
		console.log("****************clicked");
		getMovieData();
	});
	






/*
	// Execute a function when the user releases a key on the keyboard
	// Must use `keyup`. `keydown` or anything else will not allow typing in field
	input.addEventListener("keyup", function(event) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Number 13 is the "Enter" key on the keyboard
		console.log(event.key);
		console.log(event.which);


		if (event.which === 13) {
			console.log(event.key);
			// Trigger the button element with a click
			var movieName = $('#movie-name').val().replace(/\s/g, "+");
			// console.log("movie name:",movieName);
			// debugger;
			console.log("enter:",movieName);
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
				console.log("click:",movieName);
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
	*/

	// https://stackoverflow.com/questions/14754619/jquery-ajax-success-callback-function-definition

});
