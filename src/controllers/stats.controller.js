const httpStatus = require('http-status');
const {statsService } = require('../services');
var faker = require('faker');
const _ = require('lodash')


const getAllRecords = async (req, res) => {
  comp = await statsService.getAllRecords()
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

  let records = await statsService.getAllJobRecords();

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
  getAllRecords,
  getRecordCloud
};
