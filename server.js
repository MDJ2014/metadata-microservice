var express = require('express');
var app = express();
var bodyParser = require("body-parser");
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
/*
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204
*/
// http://expressjs.com/en/starter/static-files.html


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html


//app.set("view engine", "pug");

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/start.html');
});


// your first API endpoint... 
app.get("/api/fileanalyse", function (req, res) {

var userAgent = req.headers['user-agent'];
var userLanguage =  req.headers["accept-language"];
var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;


 res.json({"name":ip,"type":userLanguage, "size":userAgent});


});



var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });

