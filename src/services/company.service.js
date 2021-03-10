

const { findOneAndDelete } = require('../models/company.model');
const Company = require('../models/company.model');

const createNewCompany = async (input) => {
  const company = await Company.create(input);
  ;
  return company;
};

const editCompany = async (input) => {
  console.log(input,'input');
  try {

    const company = await Company.findOneAndUpdate({
      _id:input._id
    },{$set:{...input}})
    ;
    return company;
  }
  catch(e){
    console.log(e,'ERROR');
  }
};

const getAllCompanies = async () => {
  const company = await Company.find({});
  return company;
};

const deleteCompany = async (_id) => {
  const company = await Company.findByIdAndDelete(_id)
  return company;
};



const searchCompanies = async ({companyName}) => {
  console.log(companyName,'companyName from SERVICE');
  const company = await Company.find({companyName});
  
  return company;
};



module.exports = {
  createNewCompany,
  getAllCompanies,
  searchCompanies,
  editCompany,
  deleteCompany
   
  };
  

