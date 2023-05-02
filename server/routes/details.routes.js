const express = require("express");
const {
  registerPerson,
  showAllDetails,
} = require("../controllers/details.controllers");
const app = express.Router();

app.post("/register", registerPerson);
app.get("/show", showAllDetails);
module.exports = app;
