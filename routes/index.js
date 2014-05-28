var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Dock X', dock_id: 'DOC101' });
});

/* GET dock client. */
router.get('/dock', function(req, res) {
  res.render('client', { title: 'Dock X', dock_id: 'DOC101' });
});

/* GET app page2. */
router.get('/app2', function(req, res) {
  res.render('index', { title: 'Dock X', dock_id: 'DOC102' });
});

/* GET dock client2. */
router.get('/dock2', function(req, res) {
  res.render('client', { title: 'Dock X', dock_id: 'DOC102' });
});

module.exports = router;
