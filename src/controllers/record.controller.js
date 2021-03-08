const httpStatus = require('http-status');
const {recordService } = require('../services');

const createNewRecord = async (req, res) => {
const {companyName} =req.body
  const rec = await recordService.createNewRecord({
      companyName
  });
  res.status(httpStatus.CREATED).send(rec);
};

module.exports = {
    createNewRecord,
  
};
