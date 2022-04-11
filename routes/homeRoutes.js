const express = require('express');
const router = express.Router();

// This route gives me my landing page, yay!!
router.get('/', (req, res) => {
    res.render('landing')
})

module.exports = router;