var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.hasOwnProperty('auth') && req.session['auth']) {
    res.render('index', { title: 'Library' });
  } else {
    res.redirect(`/signin?url=${req.url}`);
  }
  // req.session.lastPage = '/home';
  console.log(req.session);
});

module.exports = router;
