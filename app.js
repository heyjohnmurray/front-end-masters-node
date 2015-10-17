// this is how to set up a node server
var http = require('http');

http.createServer(function (request, response){
  response.writeHead({
    'ContentType':'text-plain'
  });
  response.end('Hey shawty!!');
}).listen(3000);
