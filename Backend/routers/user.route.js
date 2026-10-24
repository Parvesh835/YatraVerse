const express = require('express');
const { signup, login } = require('../controllers/UserControllers');
const { auth, isAdmin, isAgent, isTourist } = require('../middlewares/auth');
const router = express.Router();

router.post('/signup', signup);
router.post('/login',  login);
router.get('/test', auth, (req, res) => {
    res.status(200).json({
        success: true,
        message: "welcome to test route"
    })
});

module.exports = router