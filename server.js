require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var Photo = require('./models/photo');
var Artist = require('./models/artist');
var Format = require('./models/format');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.get('/api/photos', function(req, res) {
	Photo.fetchAll().then(function(photos) {
		res.json(photos);
	});
});

app.post('/api/photos', function(req, res) {
	var photo = new Photo({
		title: req.body.title,
		image: req.body.image,
		description: req.body.description,
		artist_id: req.body.artist_id,
		format_id: req.body.format_id
	});

	photo.save().then(function(){
		res.json(photo);
	});
});

app.delete('/api/photos/:id', function(req, res) {
  var photo = new Photo({
 	 id: req.params.id
	});

  photo.destroy({ require: true }).then(function(photo) {
    res.json(photo);
  }, function() {
    res.status(404).json({
      error: 'Photo not found'
    });
  });
});

app.listen(process.env.PORT || 3000);