const express = require('express');
const recordController = require('../../controllers/record.controller');

const router = express.Router();

router.post('/createnewrecord', recordController.createNewRecord);
// router.get('/allrecords', recordController.getAllRecords);
router.get('/allrecords', recordController.getAllRecords);
router.get('/search', recordController.searchRecords);
router.put('/editcompany', recordController.editRecord);  // 
router.delete('/deleterecord', recordController.deleteRecord);  // 
router.post('/createnewfakerecords', recordController.createNewFakeRecords); 





module.exports = router;