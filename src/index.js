const express = require('express')
const app = express()
const port = process.env.PORT || 4001
var cors = require('cors')
var path = require('path');
var bodyParser = require('body-parser')
app.use(bodyParser.json())
require('dotenv').config()
const routes = require('./routes/v1');
app.use(cors())

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('MONGO DB CONNECTED ');
});

app.use('/v1', routes);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  console.log(`Example app listening at http://localhost:${port}`)
  console.log(`Example app listening at http://localhost:${port}`)

})

