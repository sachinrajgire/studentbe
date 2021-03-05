const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const data = require('./Student_Data.json');
const { v4: uuidv4 } = require('uuid');
var cors = require('cors')
var path = require('path');

app.use(cors())
let  uuidData = data.map(i=>{
  return {
      ...i, 
      Id: uuidv4()
  }
 })

 
app.get('/recorddetails', (req, res) => {
    let found= uuidData.find(i=>i.Id === req.query.Id)
    res.send(found)
  
})

app.get('/dummyurl', (req, res) => {
  
  console.log(process.env.NODE_ENV,'process.env.NODE_ENV');
  if(process.env.NODE_ENV === 'production'){
    res.send(process.env.TWILIO_API_KEY )
  }
  res.send('process.env.NODE_ENV')
  
})


app.get('/allrecords', (req, res) => {
  
   res.send(uuidData)
})


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/send.html'));
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})