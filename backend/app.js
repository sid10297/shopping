const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const products = require("./routes/products");
const usersAuth = require("./routes/usersAuth");
const placeOrder = require("./routes/placeOrder");
const {
  API_ENDPOINT,
  SLASH_API,
  DB_CONNECTED,
  SERVER_LISTENING,
} = require("./Constants");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", products);
app.use("/api", usersAuth);
app.use("/api", placeOrder);

app.get("/", (req, res) => {
  res.send(API_ENDPOINT);
});

app.get("/api", (req, res) => {
  res.send(SLASH_API);
});

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log(DB_CONNECTED);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(SERVER_LISTENING, port);
});
