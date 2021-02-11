var express = require('express');
var app = express();

const PORT = process.env.PORT || 8080;
var port = PORT;

app.get("/", function(req,res){

    res.sendFile(__dirname + '/index.html');

});

app.listen(PORT);
console.log('server running at ....');

var projectsButton = document.getElementById("projectButton");
projectsButton.onclick = function(){
    app.route('/login')
 // show the form (GET http://localhost:PORT/login)
 .get(function(req, res) {
 res.send('this is the login form');
 })
 // process the form (POST http://localhost:PORT/login)
 .post(function(req, res) { console.log('processing');
 res.send('processing the login form!');
 });
}