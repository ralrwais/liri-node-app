var twitterInfo = require('./keys.js');
 	
var askSpotify = require('spotify');

var request = require('request');

var fs = require('fs');

var command = process.argv[2];

var userInput = process.argv[3];

function cases() {
	switch(command) {
		case 'my-tweets':
		twentyTweets();
		break;
		case 'spotify-this-song':
		music();
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

function music() {
	askSpotify.search({type: 'track', query: userInput} function(err, data) {
		if(!err){
			console.log("Are any of these songs what you are looking for?");
      		console.log("");
     		 for (var i = 0; i < data.tracks.items.length; i++) {
		        console.log("Song: " +data.tracks.items[i].name);
		        console.log("Artist: " +data.tracks.items[i].artists[0].name);
		        console.log("Album: "+data.tracks.items[i].album.name);
		        console.log("Link: "+data.tracks.items[i].href);
		        console.log("");
		        var songInfo = {
		          song: data.tracks.items[i].name,
		          artist: data.tracks.items[i].artists[0].name,
		          album: data.tracks.items[i].album.name,
		          link: data.tracks.items[i].href
		        };
				}
			};
};



