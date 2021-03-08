

const Record = require('../models/record.model');

const createNewRecord = async (input) => {
 const {companyName} =input
  const rec = await Record.create({
    companyName

  });
  return rec;
};


// app.get('/recorddetails', (req, res) => {

//   try {
//     let found= uuidData.filter(i=>i.Id === req.query.Id)
//    res.send(found)
//   }
//   catch(error) {
//     console.log('error', error)
//     res.status(404).send(error)
//   }

// })







// app.get('/dummyroute', (req, res) => {

//   //if enviroement is production - send  your dummy code bacl 
//   //if local/development is development - send  your cod ehsould be local-dummy-key

//   if(process.env.NODE_ENV === 'production') {
//     return res.send(process.env.TWILIO_API_KEY)
//   }
//   res.send('some dummy key availabe in local enviroment')

// })

// app.get('/allrecords', (req, res) => {
//    res.send(uuidData)
// })

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/send.html'));
// });
module.exports = {
    createNewRecord,
   
  };
  