const express = require('express');
const recordRoute = require('./record.route');
const router = express.Router();

router.use('/record',recordRoute)


module.exports = router;
