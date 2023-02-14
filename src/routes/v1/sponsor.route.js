const express = require('express');
const sponsorController = require('../../controllers/sponsor.controller');

const router = express.Router();

router.post('/createnewsponsor', sponsorController.createNewSponsor);
router.get('/allsponsors', sponsorController.getAllSponsors);
router.put('/editsponsor', sponsorController.editSponsor);  // 
router.delete('/deletesponsor', sponsorController.deleteSponsor);  // 
router.get('/getsponsorbyid', sponsorController.getSponsorById);
router.get('/getsponsorbyid1', sponsorController.getSponsorById);
router.get('/getsponsorbyid1', sponsorController.getSponsorById);





module.exports = router;
