var express = require('express');
var path = require('path');
var app = express();

/*app.get('/api/userInfos', function(req, res){
  res.send(JSON.stringify({ userName: "jim" }));
});*/
app.use(express.static(path.join(__dirname, '/')));
app.listen(8080);