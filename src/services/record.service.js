

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

  const regex = new RegExp(searchText,'gmi')

  const rec = await Record.find(
    {$or:
  [
    {jobTitle :{$regex: regex}},
    {universityName :{$regex: regex}},
    {specialization :{$regex: regex}},
]
})
.populate('company',['companyName','careerUrl'])
.limit(25)


   return rec;
  
};


const getAllRecords = async () => {
  const com = await Record
  .find({})
  .sort({_id:-1})
  .populate('company',['companyName','careerUrl'])
  
  return com;
};

const getRecordById = async (Id) => {
  const com = await Record
  .find({_id:Id})
  .populate('company',['companyName','careerUrl'])
  
  return com;
};

const getPaginatedRecords = async ({next_cursor,limit=25}) => {
  let com
if(next_cursor === 'null') {
   com = await Record
  .find({})
  .populate('company',['companyName','careerUrl'])
  .limit(limit)
  return com 
}

else {
  com = await Record
  .find({ _id: { $gt: next_cursor } })
  .populate('company',['companyName','careerUrl'])
  .limit(limit)

}
  
  // console.log(com,'record service getpaginatedrecrds');
  return com
};

const editRecord = async (input) => {
  try {

    const record = await Record.findOneAndUpdate({
      _id:input._id
    },{$set:{...input}})
    ;
    return record;
  }
  catch(e){
  }
};

const deleteManyByCompanyId = async (_id) => {
  const deleted = await Record.deleteMany({company:_id})
  return deleted;
};
const getRecordsByCompanyId = async (ids) => {

  const records = await Record
  .find({ 'company': { $in: ids } })
  .populate('company',['companyName','careerUrl'])
  return records;
};

module.exports = {
    createNewRecord,
    deleteRecord,
    getAllRecords,
    editRecord,
    deleteManyByCompanyId,
    searchRecords,
    getPaginatedRecords,
    getRecordsByCompanyId,
    getRecordById,

   
  };
  