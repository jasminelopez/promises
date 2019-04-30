/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`                                       //nextStep
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO var
  fs.readFile(filePath, (err, text) => {
    if (err){
      callback(err);
    } else {
      callback(null, text.toString().split('\n')[0]);
    }
  });
};
//pluckFirstLineFromFile.then()
// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request.get(url, (err, response) => {
    if (err){
      callback(err);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
