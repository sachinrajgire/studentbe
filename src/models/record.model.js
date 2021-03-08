const mongoose = require('mongoose');


const recordSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: false,
      index: true,
    },
  
  },
  {
    timestamps: true,
  }
);


const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
