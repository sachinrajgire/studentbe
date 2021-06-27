const express = require('express');
const statsController = require('../../controllers/stats.controller');
const router = express.Router();

router.get('/getAllStats', statsController.getAllRecords);
router.get('/getrecordcloud', statsController.getRecordCloud);

module.exports = router;
