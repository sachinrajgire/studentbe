const httpStatus = require('http-status');
const {statsService } = require('../services');
var faker = require('faker');
const _ = require('lodash')



  const getAllRecords = async (req, res) => {
    comp = await statsService.getAllRecords()
    res.status(httpStatus.CREATED).send(comp);
 }


module.exports = {
    getAllRecords,

};
