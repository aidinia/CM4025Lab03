var http = require("http");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("app running on port"+ PORT);
});

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': "text/plain"});
    response.end("Hello WOrld\n");
}).listen(8080);

console.log("Server running");