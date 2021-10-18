const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const products = require("./routes/products");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", products);

app.get("/", (req, res) => {
  res.send("Home Page");
});

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB connected.");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("server listening on port ", port);
});
