const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statsSchema = mongoose.Schema(
  {
    company: { type: Schema.Types.ObjectId, ref: 'Company' },
    isApproved:{type: Boolean,default:false},
    universityName:{type: String},
    graduationDate:{type: Date},
    specialization:{type: String},
    jobTitle:{type: String},
    jobStartDate:{type: Date},
    },
  {
    timestamps: true,
  }
);



const Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;



