

const Record = require('../models/record.model');


const getAllRecords = async () => {
  const com = await Record
  .find({})
  .sort({_id:-1})
  .populate('company',['companyName','careerUrl'])

  //* Used foreach to iterate the array and stored the count in another object variable
  let b = {};
  com.forEach(el=>{
    b[[el.company["companyName"],el.company["careerUrl"]]]=
    (b[[el.company["companyName"],el.company["careerUrl"]]] || 0)+1;
  })

  //* After storing it in with number of times it occurred, Then sorted the data in descending order
  const sortedData = Object.fromEntries(
    Object.entries(b).sort(([,a],[,b]) => b-a)
  );

  return sortedData;
};


module.exports = {

    getAllRecords,

  };
