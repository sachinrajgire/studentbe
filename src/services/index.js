// module.exports.recordService = require('./record.service');
// module.exports.companyService = require('./company.service');

const companyService  = require('./company.service');
const recordService = require('./record.service');

module.exports ={
 companyService,
 recordService
}

