const express = require("express");
const createError = require("http-errors");
const UserRouter = require("./routes/users");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use("/users", UserRouter);

app.use((req, res) => {
  res.send(createError(404));
});
module.exports = app;
