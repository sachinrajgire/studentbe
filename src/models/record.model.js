const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recordSchema = mongoose.Schema(
  {
    companyName: { type: Schema.Types.ObjectId, ref: 'Company' },
  
  },
  {
    timestamps: true,
  }
);



const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
