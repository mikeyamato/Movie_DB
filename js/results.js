$(document).ready(function() {

	// var movieObject = JSON.parse(sessionStorage.res);
	var movieObject = JSON.parse(sessionStorage.getItem('omdbRes'));
	// console.log(sessionStorage.res);

	// poster
	$('#poster').append("<img src='"+movieObject.Poster+"' />")

	// review
	for (let i = 0; i<movieObject.Ratings.length; i++) {
		var review = document.getElementById('review'+[i]);
		// console.log(review);
		review.innerHTML = movieObject.Ratings[i].Source + ': ' + movieObject.Ratings[i].Value;
		// console.log(movieObject.Ratings[i].Source);
	}
	
	// plot
	document.getElementById('plot').innerHTML = 'Plot: ' + movieObject.Plot;
	
	// rating
	document.getElementById('rating').innerHTML = 'Rated: ' + movieObject.Rated;

	// actors
	document.getElementById('actors').innerHTML = 'Actors: ' + movieObject.Actors;

	// released year
	document.getElementById('releasedYear').innerHTML = 'Released: ' + movieObject.Year;

	// runtime
	document.getElementById('runtime').innerHTML = 'Runtime: ' + movieObject.Runtime;

	// genre
	document.getElementById('genre').innerHTML = 'Genre: ' + movieObject.Genre;

	sessionStorage.clear();

});
