require("dotenv").config();

var fs = require("fs");
var spotify = require("node-spotify-api");
//var request = require("request");
var Twitter = require("twitter");

//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);


//Spotify request we want to search artist,

// OMDB API request for the movie searched
var request = require("request");
var movieName = process.argv[2];

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

request(queryUrl, function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {
    console.log(response);
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The rating of the movie is: " + JSON.parse(body).imdbRating);
  }
});
//var songPick = process.argv[3];

//var spotifyQuery = "http://api.genius.com/search?q=" + songPick + spotify;

//spotify.search({ type: 'artist', query: '' }, function(err, data) {
  //  if (err) {
    //  return console.log('Error occurred: ' + err);
    //}
   
  //console.log(data); 
  //});
