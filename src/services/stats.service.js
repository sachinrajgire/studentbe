

const Record = require('../models/record.model');


const getAllRecords = async () => {
  const com = await Record
    .find({})
    .sort({ _id: -1 })
    .populate('company', ['companyName', 'careerUrl'])

  //* Used foreach to iterate the array and stored the count in another object variable
  let b = {};
  com.forEach(el => {
    b[[el.company["companyName"], el.company["careerUrl"]]] =
      (b[[el.company["companyName"], el.company["careerUrl"]]] || 0) + 1;
  })

  //* After storing it in with number of times it occurred, Then sorted the data in descending order
  const sortedData = Object.fromEntries(
    Object.entries(b).sort(([, a], [, b]) => b - a)
  );

  //* making it like a comma separated value
  const ret = Object.entries(sortedData)

  //* getting it into the required format
  var modif = ret.map((x) => {
    return {
      CompanyName: x[0].split(',')[0],
      CareerUrl: x[0].split(',')[1],
      Total: x[1],
    }
  })

  //* returning only the first 50 records
  const slicedArray = modif.slice(0, 50);

  return slicedArray;
};


module.exports = {

  getAllRecords,

};
