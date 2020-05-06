// require dependencies
const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"
router
  // root route
  .route("/")
  //  get route to obtain a json object of the books
  .get(googleController.findAll);

// export as router to use in index.js in routes/api folder
module.exports = router;
