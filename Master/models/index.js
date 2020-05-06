// require the Book model from the book.js file
  // all models are compiled into index.js in the models folder so that the controllers only need to look for this particular index.js file
module.exports = {
  Book: require("./book")
};
