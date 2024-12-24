const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Static files
app.use(express.static("public"));

// Sample feedback data
let feedbackEntries = [];

// Route to render feedback form and entries
app.get("/", (req, res) => {
  res.render("feedback", { feedbackEntries });
});

// Route to handle form submissions
app.post("/submit-feedback", (req, res) => {
  const { name, email, comments } = req.body;

  // Add feedback to the list
  feedbackEntries.push({ name, email, comments, date: new Date() });

  res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
