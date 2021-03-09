const httpStatus = require('http-status');
const {companyService } = require('../services');

const createNewCompany = async (req, res) => {
const {companyName} =req.body
  const comp = await companyService.createNewCompany({
      companyName
  });
 console.log(comp,'comp');

  res.status(httpStatus.CREATED).send(comp);
};

module.exports = {
  createNewCompany,
  
};
