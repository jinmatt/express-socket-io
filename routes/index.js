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

module.exports = router;
