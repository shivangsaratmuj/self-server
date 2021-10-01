const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let local_ip = req.connection.remoteAddress.split(":")[3];
  res.status(200).json({ hey:"Hey", ip: local_ip });
});

module.exports = router;
