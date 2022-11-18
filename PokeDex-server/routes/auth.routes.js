const { SignupController, LoginController } = require('../controller/auth.controller');

const router = require('express').Router();

router.post('/login', LoginController);
router.post('/signup', SignupController);

module.exports = router;