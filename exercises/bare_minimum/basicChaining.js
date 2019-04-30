/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var promises = require('./promisification.js'); //We can pull the github method to pull user data
var Promise = require('bluebird');
var fsFunctions = Promise.promisifyAll(fs);



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return fsFunctions.readFileAsync(readFilePath) //Reads file for username
        .then(function(data){
          var user = data.toString().split('\n')[0];
          return promises.getGitHubProfileAsync(user); //that retrieves the profile
        })
        .then(function(userProfile){
          return fsFunctions.writeFileAsync(writeFilePath,JSON.stringify(userProfile));  //writing the profile to file
        });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
