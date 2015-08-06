// Simple GET request example :
$http.get('/api/users').
  then(function(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });



  // Simple POST request example (passing data) :
$http.post('/someUrl', {msg:'hello word!'}).
  then(function(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });




    var config = { 
        headers:  {
            'Authorization': 'Basic RDIwNjA0MDg6MDAwMTEw==',
            'Accept': 'application/vnd.wps_api.v3+json'
        }
    };

    $http.get(ttp://api.wpswebservices.com/", config);

