var express = require('express');
var router = express.Router();

/* Controller Sign In*/
router.get('/', function(req, res, next) {
    res.render('auth/signin', { title: 'Sign In' });
});

module.exports = router;