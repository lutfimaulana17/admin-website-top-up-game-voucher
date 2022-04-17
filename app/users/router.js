var express = require('express');
var router = express.Router();
const { viewSignin } = require('./controller');

router.get('/', viewSignin);

module.exports = router;
