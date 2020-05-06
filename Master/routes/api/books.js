// require dependencies
const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
// root route
router.route("/")
  // get method to find all books
  .get(bookController.findAll)
  // post method to create a new book
  .post(bookController.create);

// Matches with "/api/books/:id" to find an individual book
router
  .route("/:id")
  // get method to find one book
  .get(bookController.findById)
  // put method to update a book
  .put(bookController.update)
  // delete method to remove a book
  .delete(bookController.remove);

// export as router to use in index.js in routes/api folder
module.exports = router;
