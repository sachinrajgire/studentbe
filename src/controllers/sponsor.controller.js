const httpStatus = require('http-status');
const {sponsorService } = require('../services');
const _ = require('lodash')


const createNewSponsor = async (req, res) => {
  console.log(req.body,'req.body');
    const rec = await sponsorService.createNewSponsor(req.body);
     res.status(httpStatus.CREATED).send(rec);
  }



const deleteSponsor = async (req, res) => {
const {_id} = req.query
const comp = await sponsorService.deleteSponsor(_id);
  res.status(httpStatus.CREATED).send(comp);
  };

  const editSponsor = async (req, res) => {
    const comp = await sponsorService.editSponsor(req.body);
  res.status(httpStatus.CREATED).send(comp);
  };

  const getSponsorById = async (req, res) => {
    const query= req.query
    const comp = await sponsorService.getSponsorById(query.Id);
  res.status(httpStatus.CREATED).send(comp[0]);
  };


  const getAllSponsors = async (req, res) => {
    comp = await sponsorService.getAllSponsors()
    res.status(httpStatus.CREATED).send(comp);
 }  


module.exports = {
    createNewSponsor,
    deleteSponsor,
    getAllSponsors,
    editSponsor,
    getSponsorById,
};
