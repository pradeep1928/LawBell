const express = require('express');
const router = express.Router();

const { loginAdvocate, registerAdvocate, getAdvocate, updateAdvocate, verifyOtp } = require('../controller/advocate.controller');
const { authAdvocate } = require('../middleware/authentication');

router.post('/signup', registerAdvocate)
router.post('/verify', verifyOtp)
router.post('/login', loginAdvocate)
router.get('/', authAdvocate, getAdvocate)
router.post('/update/:id', authAdvocate, updateAdvocate)

module.exports = router