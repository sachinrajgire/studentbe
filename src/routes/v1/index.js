const express = require('express');
const recordRoute = require('./record.route');
const companyRoute = require('./company.route');
const sponsorRoute = require('./sponsor.route');
const statsRoute = require('./stats.route');
const router = express.Router();

router.use('/record',recordRoute)
router.use('/company',companyRoute)
router.use('/sponsor',sponsorRoute)
router.use('/stats',statsRoute)


module.exports = router;
