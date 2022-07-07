const express = require('express');
const router = express.Router();
const orm = require('../config/orm');

router.get('/', (req, res) => {
  orm.selectAll(function (error, result) {
    if (error) {
      return res
        .status(501)
        .json({ message: 'Not able to query the database' });
    }
    return res.render('index');
  });
});

module.exports = router;
