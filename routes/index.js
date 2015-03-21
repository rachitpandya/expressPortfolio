var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome To my Portfolio' });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});

/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Service' });
});

module.exports = router;
