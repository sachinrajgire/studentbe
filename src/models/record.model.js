const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recordSchema = mongoose.Schema(
  {
    company: { type: Schema.Types.ObjectId, ref: 'Company', minlength: 2, maxlength:200},
    isApproved:{type: Boolean,default:false},
    universityName:{type: String, minlength: 2, maxlength:200},
    graduationDate:{type: Date, min: '1995-01-01', max: '2050-12-31'},
    specialization:{type: String, minlength: 2, maxlength:200},
    jobTitle:{type: String, minlength: 2, maxlength:200},
    jobStartDate:{type: Date, min: '1995-01-01', max: '2050-12-31'},
    },
  {
    timestamps: true,
  }
);



const Record = mongoose.model('Record', recordSchema);

module.exports = Record;



