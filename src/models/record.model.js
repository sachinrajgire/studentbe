const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recordSchema = mongoose.Schema(
  {
    company: { type: Schema.Types.ObjectId, ref: 'Company' },
    universityName:{type: String},
  
  },
  {
    timestamps: true,
  }
);



const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
