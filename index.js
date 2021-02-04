var http = require("http");

http.createServer(function (request, response){
    response.wrhiteHead(200, {'Content-Type': "text/plain"});
    response.end("Hello WOrld\n");
}).listen(8080);

console.log("Server running");