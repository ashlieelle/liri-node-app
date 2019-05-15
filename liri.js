// require axios needed for OMDB and Bands in Town API
var axios = require("axios");
// require dotenv so files are hidden
require("dotenv").config();
// require file system
var fs = require("fs");
// require ./keys.js file
var keys = require("./keys.js");
// require node spotify api
var Spotify = require("node-spotify-api");
// save spotify key as a variable
var spotify = new Spotify(keys.spotify);
// require npm moment
var moment = require("moment");

// adding process.argv[i] as variables to use for statements
var standard = process.argv[2];
var parameter = process.argv.slice(3).join(" ");
console.log(action, term);

// concert-this
var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

if (action === 'concert-this') {
    var theConcert = "";
    }
    console.log(theConcert);

// movie-this
var queryUrl = "https://www.imdb.com/title/tt0485947/"

    if (action === 'movie-this') {
 

    // Mr. Nobody movie info to give at else portion of statement???
var defaultMovie;
if (parameter === undefined) {
    defaultMovie = "Mr. Nobody";
} else {
    defaultMovie = parameter;
};

// spotify-this-song
// ??? DO I NOT NEED A QUERY URL BECAUSE THIS IS AN ACTUAL NPM PACKAGE?

if (action === 'spotify-this-song') {
    var thisSong = "";
    for (var i = 3; i < process.argv.length; i++) {
        thisSong += process.argv[i];
    }
    console.log(thisSong);
}
else {
    thisSong = parameter;
}

// reading file
fs.readFile("random.txt", "utf8", function (err, data) {
    // If there was an error reading the file, we log it and return immediately
    if (err) {
        return console.log(err);
    }