const express = require('express');
const recordController = require('../../controllers/record.controller');

const router = express.Router();

router.post('/createnewrecord', recordController.createNewRecord);
router.get('/allrecords', recordController.getAllRecords);
// router.get('/searchcompanies', companyController.searchCompanies);//pass in search paramter
// router.put('/editcompany', companyController.editCompany);  // 
router.delete('/deleterecord', recordController.deleteRecord);  // 


module.exports = router;