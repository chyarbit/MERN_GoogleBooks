// require dependencies
const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Book routes 
router.use("/books", bookRoutes);

// Google Routes
router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

// export as router to use in index.js file in routes folder
module.exports = router;
