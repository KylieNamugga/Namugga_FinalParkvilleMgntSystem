const express = require('express');
const router = express.Router();

//Requiring schema
const Signoff = require('../models/signoffmodel')

//Fetching client data from the db to populate the table
router.get('/report', async (req, res) => {
  try {
    const data = await Signoff.find({}).sort({ $natural: -1 });
    res.render('report', { signoffs: data })
  } catch (error) {
    return res.status(400).send(
      {
        status: 400,
        message: 'Sorry failed to fetch all signoffs',
        error
      });
  }
});

module.exports = router;