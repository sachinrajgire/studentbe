

const Record = require('../models/record.model');

const createNewRecord = async (input) => {
//  const {companyName,universityName} =input
  const rec = await Record.create(input);
  return rec;
};

const deleteRecord = async (_id) => {
  const rec = await Record.findByIdAndDelete(_id)
  return rec;
};


const searchRecords = async (searchText) => {
  console.log(searchText,'searchText');

  const regex = new RegExp(searchText,'gmi')

  const rec = await Record.find(
    {$or:
  [
    {jobTitle :{$regex: regex}},
    {universityName :{$regex: regex}},
    {specialization :{$regex: regex}},
]
})


  console.log(rec,'rec');
   return rec;
  
};


// const getAllRecords = async () => {
//   const com = await Record
//   .find({})
//   .populate('company',['companyName','careerUrl'])
  
//   return com;
// };

const getAllRecords = async () => {
  const com = await Record
  .find({})
  .populate('company',['companyName','careerUrl'])
  
  return com;
};

const editRecord = async (input) => {
  console.log(input,'input');
  try {

    const record = await Record.findOneAndUpdate({
      _id:input._id
    },{$set:{...input}})
    ;
    console.log(record,'record');
    return record;
  }
  catch(e){
    console.log(e,'ERROR');
  }
};

const deleteManyByCompanyId = async (_id) => {
  const deleted = await Record.deleteMany({company:_id})
  return deleted;
};

module.exports = {
    createNewRecord,
    deleteRecord,
    getAllRecords,
    editRecord,
    deleteManyByCompanyId,
    searchRecords

   
  };
  