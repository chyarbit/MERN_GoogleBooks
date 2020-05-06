// require dependencies
  // axios to do the API calls
const axios = require("axios");
  // access to models folder
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    // request is the deconstructed object which is the query and parameters for the search
    const { query: params } = req;
    // API call with the parameters
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      // once successful, filter the results using .filter to get a new array
      .then(results =>
        results.data.items.filter(
          result =>
            // new array will be an object containing the following keys: title, infoLink, authors, description, imageLinks, and thumbnail
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      // once successful, object with the keys that were just created will utilize the find method from the Book model to filter through the object and ensure that there is a value for each key that was retrieved from the API
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      // if all keys have a value, send the response as a json object
      .then(books => res.json(books))
      // if unsuccessful, provide an error message
      .catch(err => res.status(422).json(err));
  }
};
