const httpStatus = require('http-status');
const {recordService } = require('../services');
const {companyService } = require('../services');

const createNewRecord = async (req, res) => {
const {companyName,careerUrl,universityName} =req.body
const input ={
  companyName,
  careerUrl,
  universityName
}
  const comp = await companyService.createNewCompany(input);
  const rec = await recordService.createNewRecord({
      companyName:comp._id,
      universityName
  });
  console.log(rec,'rec from controller ')
  console.log(comp,'comp from controller ')
  res.status(httpStatus.CREATED).send(rec);
};

const deleteRecord = async (req, res) => {
  const {_id} = req.query
  
    const comp = await recordService.deleteRecord(_id);
   console.log(comp,'comp');
  res.status(httpStatus.CREATED).send(comp);
  };

  const getAllRecords = async (req, res) => {
    comp = await recordService.getAllRecords()
    res.status(httpStatus.CREATED).send(comp);
 } 

module.exports = {
    createNewRecord,
    deleteRecord,
    getAllRecords
  
};
