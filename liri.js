//write the code you need to grab the data from keys.js. 
//Then store the keys in a variable

//command: my-tweets(show your last 20 tweets and when they were created at in your terminal/bash window.)
var twitterInfo = require('./keys.js');
 	
var askSpotify = require('spotify');

var request = require('request');

var fs = require('fs');

var command = process.argv[2];

function cases() {
	switch(command) {
		case 'my-tweets':
		twentyTweets();
		break;
		case 'spotify-this-song':
		songInfo();
		break;
		case 'movie-this':
		movieInfo();
		break;
		case 'do-what-it-says':
		randomTxt();
		break;
		default: 
		console.log('Sorry, Liri isnt quite getting you. Please try a different command.');
	};
};

function twentyTweets() {
	var tweeter = {screen_name: 'RalrwaisRima'};
	twitterInfo.twitterKeys.get('statuses/user/timeline', tweeter, function(error, tweets, response){
		if(!error) {
			console.log('Your latest tweets: ');
			for (var i = 0; i < 20; i++){
				console.log((i+1) + tweets[i].text);
				var myTweets ={
					userTweets: tweets[i].text};
				}
			}
		}
	)};



//command: spotify-this-song(in terminal followed by : '<song name here>') 
//^^ will show:Artist(s) /The song's name / A preview link of the song from Spotify/ The album that the song is from
//if no song is provided then your program will default to "The Sign" by Ace of Base


//command: movie-this (in terminal followed by '<movie name here>')
//Title of the movie.
//   * Year the movie came out.
 //  * IMDB Rating of the movie.
   //* Country where the movie was produced.
   //* Language of the movie.
   //* Plot of the movie.
   //* Actors in the movie.
   //* Rotten Tomatoes Rating.
   //* Rotten Tomatoes URL.
//If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'



//command: do-what-it-says
//Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands

