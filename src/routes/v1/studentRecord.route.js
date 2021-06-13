const express = require('express');
const studentRecordController = require('../../controllers/studentRecord.controller');

const router = express.Router();

router.post('/createnewstudentRecord', studentRecordController.createNewStudentRecord);
router.get('/allstudentRecords', studentRecordController.getAllStudentRecords);
router.put('/editstudentRecord', studentRecordController.editStudentRecord);  // 
router.delete('/deletestudentRecord', studentRecordController.deleteStudentRecord);  // 
router.get('/getstudentRecordbyid', studentRecordController.getStudentRecordById);





module.exports = router;
