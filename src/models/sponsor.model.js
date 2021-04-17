const mongoose = require('mongoose');
const sponsorSchema = mongoose.Schema(
  {
    sponsorName: {type: String},
    isApproved:{type: Boolean,default:false},
    sponsorDetails:{type: String},
    
    },
  {
    timestamps: true,
  }
);



const Sponsor = mongoose.model('Sponsor', sponsorSchema);

module.exports = Sponsor;



