

const Sponsor = require('../models/sponsor.model');

const createNewSponsor = async (input) => {
  console.log(input,'input');
  try {
    const rec = await Sponsor.create(input);
    console.log(rec,'REC ');
  }
  catch(e){
    console.log(e,'ERROR ');
    return rec;
  }
  
};

const deleteSponsor = async (_id) => {
  const rec = await Sponsor.findByIdAndDelete(_id)
  return rec;
};



const getAllSponsors = async () => {
  const com = await Sponsor
  .find({})
  .sort({_id:-1})
  
  return com;
};

const getSponsorById = async (Id) => {
  const com = await Sponsor
  .find({_id:Id})
  
  return com;
};


const editSponsor = async (input) => {
  try {

    const sponsor = await Sponsor.findOneAndUpdate({
      _id:input._id
    },{$set:{...input}})
    ;
    return sponsor;
  }
  catch(e){
  }
};


module.exports = {
    createNewSponsor,
    deleteSponsor,
    getAllSponsors,
    editSponsor,
    getSponsorById,

   
  };
  