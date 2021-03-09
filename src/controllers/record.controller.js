const httpStatus = require('http-status');
// const {recordService } = require('../services');
const {companyService } = require('../services');

const createNewRecord = async (req, res) => {
const {companyName} =req.body
  const comp = await companyService.createNewRecord({
      companyName
  });
//   const rec = await recordService.createNewRecord({
//       companyName:comp._id
//   });
//   console.log(rec,'rec from controller ')
//   console.log(comp,'comp from controller ')
  res.status(httpStatus.CREATED).send(rec);
};

module.exports = {
    createNewRecord,
  
};
