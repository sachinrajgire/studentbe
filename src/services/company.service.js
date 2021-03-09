

const Company = require('../models/company.model');

const createNewCompany = async (input) => {
 const {companyName} =input
  const company = await Company.create({
    companyName

  });
  ;
  return company;
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
  createNewCompany,
   
  };
  

