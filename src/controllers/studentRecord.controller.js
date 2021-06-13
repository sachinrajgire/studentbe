const httpStatus = require('http-status');
const {studentRecordService } = require('../services');
const _ = require('lodash')


const createNewStudentRecord = async (req, res) => {
  console.log(req.body,'req.body');
    const rec = await studentRecordService.createNewStudentRecord(req.body);
     res.status(httpStatus.CREATED).send(rec);
  }



const deleteStudentRecord = async (req, res) => {
const {_id} = req.query
const comp = await studentRecordService.deleteStudentRecord(_id);
  res.status(httpStatus.CREATED).send(comp);
  };

  const editStudentRecord = async (req, res) => {
    const comp = await studentRecordService.editStudentRecord(req.body);
  res.status(httpStatus.CREATED).send(comp);
  };

  const getStudentRecordById = async (req, res) => {
    const query= req.query
    const comp = await studentRecordService.getStudentRecordById(query.Id);
  res.status(httpStatus.CREATED).send(comp[0]);
  };


  const getAllStudentRecords = async (req, res) => {
    comp = await studentRecordService.getAllStudentRecords()
    res.status(httpStatus.CREATED).send(comp);
 }  


module.exports = {
    createNewStudentRecord,
    deleteStudentRecord,
    getAllStudentRecords,
    editStudentRecord,
    getStudentRecordById,
};
