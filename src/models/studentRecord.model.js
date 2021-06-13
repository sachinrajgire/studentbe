const mongoose = require('mongoose');
const studentRecordSchema = mongoose.Schema(
  {
    studentRecordName: {type: String},
    isApproved:{type: Boolean,default:false},
    studentRecordDetails:{type: String},
    
    },
  {
    timestamps: true,
  }
);



const StudentRecord = mongoose.model('StudentRecord', studentRecordSchema);

module.exports = StudentRecord;



