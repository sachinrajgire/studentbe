const express = require('express');
const recordRoute = require('./record.route');
const companyRoute = require('./company.route');
const studentRecordRoute = require('./studentRecord.route');
const homeworkRoute = require('./homework.route');
const router = express.Router();

router.use('/record',recordRoute)
router.use('/company',companyRoute)
router.use('/studentRecord',studentRecordRoute)
router.use('/homework',homeworkRoute)


module.exports = router;
