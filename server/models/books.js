/*
File name: index.ejs
Author: Sukhjinder Kaur
StudentID: 301087895
WebApp: COMP229-F2020-MidTerm-301087895
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  author: String,
  genre: String
},
  {
    collection: "books"
  });

module.exports = mongoose.model('Book', Book);
