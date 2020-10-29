/*
File name: index.ejs
Author: Sukhjinder Kaur
StudentID: 301087895
WebApp: COMP229-F2020-MidTerm-301087895
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
  });
});

module.exports = router;
