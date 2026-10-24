const express = require('express');
const { signup, login } = require('../controllers/UserControllers');
const { auth, isAdmin, isAgent, isTourist } = require('../middlewares/auth');
const router = express.Router();

router.post('/signup',auth, signup);
router.post('/login', auth, isAdmin, isAgent, isTourist, login);

module.exports = router