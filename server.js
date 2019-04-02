var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var multer  = require('multer');
var upload = multer();
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

app.post('/api/fileanalyse', upload.single("upfile"), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
var file = req.file;
var filename=file.originalname;
var filetype = file.mimetype;
var filesize= file.size;


 res.json({"name":filename,"type":filetype, "size":filesize});

  })






var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });

