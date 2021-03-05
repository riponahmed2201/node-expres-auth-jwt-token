const express = require('express');
const {signup, sigin} = require('../../controller/admin/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');
const router = express.Router();




router.post('/admin/signin', validateSigninRequest, isRequestValidated, sigin);

router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);


module.exports = router;