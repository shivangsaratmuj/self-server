const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.use(express.static(__dirname+"/frontend"))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/test/build', 'index.html'), function(err){
    if (err){
      res.status(500).send(err)
    }
  });
});

app.listen(process.env.PORT || 8080);