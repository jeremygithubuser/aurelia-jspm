var express = require('express');
var path = require('path');
var jsonfile = require('jsonfile');
var bodyParser = require('body-parser');
var file = path.join(__dirname, '/fakeDatas/movies.json');
var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({
  type: "application/json"
}));

/*app.get('/api/userInfos', function(req, res){
  res.send(JSON.stringify({ userName: "jim" }));
});*/
app.put('/api/movie', function (req, res) {
  var movie = req.body;
  var updatedMovies;
  jsonfile.readFile(file, function (err, movies) {
    updatedMovies = movies.map(m => {
      if (m.id == movie.id) {
        m.title = movie.title;
        m.releaseYear = movie.releaseYear;
      }
      return m;
    });
    jsonfile.writeFile(file, updatedMovies, function (err) {
      if (err) {
        res.sendStatus(500);
      }
      else {
        res.sendStatus(200);
      }
    })
  });

});
app.use(express.static(path.join(__dirname, '/')));
app.listen(8080);