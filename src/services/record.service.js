

const Record = require('../models/record.model');

const createNewRecord = async (input) => {
 const {companyName,universityName} =input
  const rec = await Record.create({
    companyName,
    universityName

  });
  return rec;
};

const deleteRecord = async (_id) => {
  const rec = await Record.findByIdAndDelete(_id)
  return rec;
};

const getAllRecords = async () => {
  const com = await Record
  .find({})
  .populate('company','companyName')
  
  return com;
};

module.exports = {
    createNewRecord,
    deleteRecord,
    getAllRecords,

   
  };
  