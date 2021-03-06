const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const data = require('./Student_Data.json');
const { v4: uuidv4 } = require('uuid');
var cors = require('cors')
var path = require('path');
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(cors())
let  uuidData = data.map(i=>{
  return {
      ...i, 
      Id: uuidv4()
  }
 })
console.log(uuidData.length,'length');
 
app.get('/recorddetails', (req, res) => {

  try {
    let found= uuidData.filter(i=>i.Id === req.query.Id)
   res.send(found)
  }
  catch(error) {
    console.log('error', error)
    res.status(404).send(error)
  }

})

app.post('/newrecord', (req, res) => {
  console.log(req.body,'req.body');
 let obj ={
   ...req.body,
   Id:uuidv4()
 }

 console.log(obj,'obj');
uuidData.push(obj)
 console.log(uuidData,'uuidData');
 
  
})






app.get('/dummyroute', (req, res) => {

  //if enviroement is production - send  your dummy code bacl 
  //if local/development is development - send  your cod ehsould be local-dummy-key

  if(process.env.NODE_ENV === 'production') {
    return res.send(process.env.TWILIO_API_KEY)
  }
  res.send('some dummy key availabe in local enviroment')

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