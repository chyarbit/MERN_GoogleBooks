// require dependencies
const path = require("path");
// Router is a method within the express npm
const router = require("express").Router();
// require to obtain access to index.js file in routes/api folder
const apiRoutes = require("./api");

// API Routes from API folder- access to all routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// export as router to be used in server.js
module.exports = router;
