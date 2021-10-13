const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("server listening on port ", port);
});