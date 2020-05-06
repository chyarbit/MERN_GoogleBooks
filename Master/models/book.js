// require dependencies
  // mongoose npm 
const mongoose = require("mongoose");
  // Schema is a template from mongoose that is used to create the models
const Schema = mongoose.Schema;

// define BookSchema as a new Schema (or a new template) with the following key pairs
const bookSchema = new Schema({
  // title will be a required string
  title: { type: String, required: true },
  // subtitle will be a string
  subtitle: { type: String },
  // authors will be an array of strings- it is a required field
  authors: { type: [String], required: true },
  // link will be a required string
  link: { type: String, required: true },
  // description will be a required string
  description: { type: String, required: true },
  // image will be a required string
  image: { type: String, required: true },
  // image will be a required string- it also must be unique
  googleId: { type: String, required: true, unique: true }
});

// define const called Book which will reference mongoose's model method using the Book model and bookSchema
const Book = mongoose.model("Book", bookSchema);

// export as Book to use in index.js in the models folder
module.exports = Book;
