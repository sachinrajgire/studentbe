

const StudentRecord = require('../models/studentRecord.model');

const createNewStudentRecord = async (input) => {
  console.log(input,'input');
  try {
    const rec = await StudentRecord.create(input);
    console.log(rec,'REC ');
  }
  catch(e){
    console.log(e,'ERROR ');
    return rec;
  }
  
};

const deleteStudentRecord = async (_id) => {
  const rec = await StudentRecord.findByIdAndDelete(_id)
  return rec;
};



const getAllStudentRecords = async () => {
  const com = await StudentRecord
  .find({})
  .sort({_id:-1})
  
  return com;
};

const getStudentRecordById = async (Id) => {
  const com = await StudentRecord
  .find({_id:Id})
  
  return com;
};


const editStudentRecord = async (input) => {
  try {

    const studentRecord = await StudentRecord.findOneAndUpdate({
      _id:input._id
    },{$set:{...input}})
    ;
    return studentRecord;
  }
  catch(e){
  }
};


module.exports = {
    createNewStudentRecord,
    deleteStudentRecord,
    getAllStudentRecords,
    editStudentRecord,
    getStudentRecordById,

   
  };
  