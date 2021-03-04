const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const data = require('./Student_Data.json');
const { v4: uuidv4 } = require('uuid');
var cors = require('cors')
var path = require('path');
app.use(cors())


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/send.html'));
});

app.get('/allrecords', (req, res) => {
  let  uuidData = data.map(i=>{
    return {
        ...i, 
        Id: uuidv4()
    }
    
    })

  res.send(uuidData)
})
app.get('/recordId', (req, res) => {
  let  uuidData = data.map(i=>{
    return {
        ...i, 
        Id: uuidv4()
    }
    
    })

  res.send(uuidData)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})