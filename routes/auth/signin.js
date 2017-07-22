var express = require('express');
var router = express.Router();

/* Controller Sign In*/
router.get('/', function(req, res, next) {
    res.render('auth/signin', { title: 'Express' });
});

module.exports = router;