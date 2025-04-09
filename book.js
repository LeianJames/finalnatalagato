const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  description: String,
  publication: String,
  location: String,
  category: String  // To identify which category the book belongs to (Fiction, Academics, etc.)
});

module.exports = mongoose.model('Book', bookSchema);