var twitterInfo = require('./keys.js');

var twitterSearch = require('twitter');

var twitterStuff = new twitterSearch(twitterInfo.twitterKeys);
 	
var request = require('request');

var askSpotify = require('spotify');

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
		movies();
		break;
		case 'do-what-it-says':
		randomTxt();
		break;
		default: 
		console.log('Sorry, Liri isnt quite getting you. Please try a different command.');
	};
};

function twentyTweets() {
	var tweeter = {screen_name: 'RalrwaisRima', count: 20};
	twitterStuff.get('statuses/user_timeline', tweeter, function(error, tweets, response) {
 		 if (!error) {
			console.log('Your latest tweets: ');
			for (var i = 0; i < tweets.length; i++){
				console.log(String(i +1) + " " + tweets[i].text);
			}
		}
	})};


function movies() {
	 request('http://www.omdbapi.com/?t='+userInput+'&y=&plot=short&r=json&tomatoes=true', function (error, response, body){
	if (!error) { 
		body = JSON.parse(body);
		console.log('Here is the movie info you requested: ')
		console.log('Title: ' + body.Title);
		console.log('Year: ' + body.Year);
		console.log('Rating: ' + body.imdbRating);
		console.log('Country: ' + body.Country);
		console.log('Language: ' + body.Language);
		console.log('Plot: ' + body.Plot);
		console.log('Actors: ' + body.Actors);
		console.log('Rotten Tomatoes Says: ' + body.tomatoRating);
		console.log('Rotten Tomatoes: ' + body.tomatoURL);
	}
   })
  };

function music() {
	 askSpotify.search({ type: 'track', query: userInput}, function(err, data) {
		if(!err){
			console.log("Here is that jam you requested: ");
		        console.log("Song: " + data.tracks.items[0].name);
		        console.log("Artist: " + data.tracks.items[0].artists[0].name);
		        console.log("Link: "+ data.tracks.items[0].href);
		        console.log("Album: "+ data.tracks.items[0].album.name); 
			};
		})};	

function randomTxt(){
  fs.readFile("./random.txt", "utf8", function(err, data){
    if (!err) {
      dataSplit = data.split(", ");
      command = dataSplit[0];
      cases();
    };
  });
};

 cases();


