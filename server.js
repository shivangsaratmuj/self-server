const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');

const ip = require('./routes/ip');
// const index = require('./routes/indexRoutes');
// const todos = require('./routes/todosRoutes');

const app = express();

app.use(express.static(__dirname+'/selfserver/build/'))

app.get('/*',function(req, res){
  res.sendFile(path.join(__dirname, '/selfserver/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', index);
// app.use('/todos', todos);
app.use('/ip', ip);

app.listen(port, function() {
  console.log("listening on port: ", port);
})
