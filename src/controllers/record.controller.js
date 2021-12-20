const httpStatus = require('http-status');
const {recordService } = require('../services');
const {companyService } = require('../services');
var faker = require('faker');
const _ = require('lodash');


const createNewRecord = async (req, res) => {
    const rec = await recordService.createNewRecord(req.body);
     res.status(httpStatus.CREATED).send(rec);
  }


/////////////************************************************** */
const createNewFakeRecords = async (req, res) => {

  for (let i =0 ;i <10 ;i++) {
    // console.log(i,'IIIIIIII')

    // console.log('I am in createfake records');
    let companyInput ={
      companyName:faker.company.companyName(),
      careerUrl:faker.internet.url(),
    }
    let recordInput ={
        universityName:`university of ${faker.address.city()}`,
        graduationDate:2020,
        specialization:faker.commerce.department(),
        jobTitle:faker.name.jobTitle(),
        jobStartDate:faker.date.past()
    }
  
   const comp = await companyService.createNewCompany(companyInput);
          newRecordInput={...recordInput,company:comp._id}
        const rec = await recordService.createNewRecord(newRecordInput);
  
  };
  }


const deleteRecord = async (req, res) => {
const {_id} = req.query
const comp = await recordService.deleteRecord(_id);
  res.status(httpStatus.CREATED).send(comp);
  };

const searchRecords = async (req, res) => {
const {searchText} = req.query
const comp = await recordService.searchRecords(searchText);
const compRec = await companyService.searchCompaniesByKeyWord(searchText);
// console.log(compRec);
const accumulateIds =compRec.map(i=>i._id)
// console.log(accumulateIds);
const recsWithKw = await recordService.getRecordsByCompanyId(accumulateIds);
const mergeRec=[...comp,...recsWithKw]
// console.log(mergeRec,'mergeRec');
const deDupValue=_.uniqBy(mergeRec,(_id) => _id.toString())
// console.log(deDupValue,'deDupValue');
res.status(httpStatus.CREATED).send(deDupValue);
  };





  const editRecord = async (req, res) => {
    const comp = await recordService.editRecord(req.body);
  res.status(httpStatus.CREATED).send(comp);
  };

  const getRecordById = async (req, res) => {
    const query= req.query
    const comp = await recordService.getRecordById(query.Id);
  res.status(httpStatus.CREATED).send(comp[0]);
  };


  const getAllRecords = async (req, res) => {
    comp = await recordService.getAllRecords()
    res.status(httpStatus.CREATED).send(comp);
 } 

  const getPaginatedRecords = async (req, res) => {
    let { next_cursor = null, limit = 25}= req.query

    let comp = await recordService.getPaginatedRecords({next_cursor,limit})
    res.status(httpStatus.CREATED).send(comp);
 } 

 function getWordCount(wordArr) {
  let map = {};
  for(let i = 0; i < wordArr.length; i++) {
    let word = wordArr[i];
    map[word] = (map[word] + 1) || 1;
  }
  return map;
}

 const getRecordCloud = async (req, res) => {

    let records = await recordService.getAllRecords();

    const jobTitleArr = records.map(i => i.jobTitle);

    let str = jobTitleArr.toString();
    let wordArr = str.split(/[ ,]+/); 

    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    function removePunctuation(str) {
      let s = str.replace(regex, '');
      s = s.replace("(", "");
      s = s.replace(")", "");
      return s.replace(/[0-9]/g, '');
    }

    for(let w in wordArr) {
      removePunctuation(wordArr[w]);
    }

    let filteredArr = _.difference(wordArr, ["III", "II", "-", "Jr.", "1", "2", "(", ")", "a", "the", "2020", "+", "(Software", 
    "Engineer)","and", "I", "&", "of", "Of", "(SDE", "2)", "(Tier", "IS", "data", "Jr", "IP", "(NLP)", "(Data", "UA", "Body", "Fleet", 
    "at", "(Web", "Development)", "In", "Robots", "(Int.)", "\"Manufacturing", "\"", "\"Software","/", "(Fall", "Intern)", "Analyst/", 
    "(Volunteer)", "Manager/", "Manager:", "Manager-", "President-", "Sr."]);

    let result = getWordCount(filteredArr);

    res.status(httpStatus.CREATED).send(result);
 }
 

module.exports = {
    createNewRecord,
    deleteRecord,
    getAllRecords,
    editRecord,
    createNewFakeRecords,
    searchRecords,
    getPaginatedRecords,
    getRecordById,
    getRecordCloud
};
