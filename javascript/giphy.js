

var APIkey = "VJ4yVJBTILO6mssF7Pp8tWm0kAzt8pFp" 
var queryURL = "https://www.omdbapi.com/?t=" + APIkey

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.Runtime);
  });