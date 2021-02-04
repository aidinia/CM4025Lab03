var http = require("http");

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
    console.log("app running on port" + PORT);
});

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': "text/plain"});
    response.end("Hello WOrld");
}).listen(8080);

console.log("Server running");