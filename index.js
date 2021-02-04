const { fstat } = require("fs");
var http = require("http");
fs.require('fs');
const PORT = process.env.PORT || 3000;

http.createServer(function (request, response){

    response.writeHead(200, {
        'Content-Type': "text/plain",
    'Acces-Control-Allow-Origin' : '*'
});
    var readStream = fs.createReadStream(__dirname, "/index.html");
    readStream.pipe(response);
}).listen(PORT);

console.log("Server running");