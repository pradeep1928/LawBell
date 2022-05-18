const express = require('express');
const router = express.Router();

const { loginAdvocate, registerAdvocate, getAdvocate, updateAdvocate, verifyOtp } = require('../controller/advocate.controller');
// const { authClient } = require("../middleware/authClient")

router.post('/signup', registerAdvocate)
router.post('/verify', verifyOtp)
router.post('/login', loginAdvocate)
router.get('/', getAdvocate)
router.post('/update/:id', updateAdvocate)

module.exports = router