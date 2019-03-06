var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
  });
  app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/signup', function (req, res) {
    res.send(req.query);
    console.log('You sent the name "' + req.body.firstname + '".');

   // console.log (req.params)
  });
  
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});