const express = require("express");
const logsController = require("./controllers/logsController");

const app = express();

app.use("/logs", logsController);

app.get("/", (req, res) => {
  res.send("Welcome to OB and Flower's Captain's Log");
});

app.get("*", (req, res) => {
    res.status(404).send("Page Not Found!!!")
})

module.exports = app;