// require models folder
const db = require("../models");

// Defining methods for the bookController
module.exports = {
  // method to find all books
  findAll: function(req, res) {
    // use find method in the Book model
    db.Book.find(req.query)
      // when successful, provide a response of the book information in a json object
      .then(dbBook => res.json(dbBook))
      // if unsuccessful, provide an error message
      .catch(err => res.status(422).json(err));
  },
  // method to find one book
  findById: function(req, res) {
    // use the findById method in the Book model
    db.Book.findById(req.params.id)
      // when successful, provide a response of the book information in a json object
      .then(dbBook => res.json(dbBook))
      // if unsuccessful, provide an error message
      .catch(err => res.status(422).json(err));
  },
  // method to create a new book
  create: function(req, res) {
    // use the create method in the Book model
    db.Book.create(req.body)
      // when successful, provide a response of the book information in a json object
      .then(dbBook => res.json(dbBook))
      // if unsuccessful, provide an error message
      .catch(err => res.status(422).json(err));
  },
  // method to update a book
  update: function(req, res) {
    // use the findOneAndUpdate method in the Book model
    // pass in the id of the book from the URL parameter (req.params.id)
    // pass in the new information from the update in the req.body
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      // when successful, provide a response of the book information in a json object
      .then(dbBook => res.json(dbBook))
      // if unsuccessful, provide an error message
      .catch(err => res.status(422).json(err));
  },
  // method to remove a book
  remove: function(req, res) {
    // use the findById method in the Book model
    // pass in the id of the book from the URL parameter (req.params.id)
    db.Book.findById(req.params.id)
      // when successful, remove the book
      .then(dbBook => dbBook.remove())
      // when successful, provide a response of the book information in a json object
      .then(dbBook => res.json(dbBook))
      // if unsuccessful, provide an error message
      .catch(err => res.status(422).json(err));
  }
};
