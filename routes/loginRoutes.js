const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/login', (req, res) => {
	res.render('login')
});

// Posting my signed user data for authentification
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {

	req.session.user = req.user
	res.redirect('/dashboard');
});

// logout from the session
router.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/login');
});

module.exports = router;