const logsController = require("express").Router();
const logsArray = require("../models/log");

// returns json response of all logs at localhost:3001/logs
logsController.get("/", (req, res) => {
  res.json(logsArray);
});

// returns jsgit on response of specific log at localhost:3001/logs/:id
logsController.get("/:id", (req, res) => {
  const { id } = req.params;
  if (logsArray[id]) {
    res.json(logsArray[id]);
  } else {
    res.redirect("/404");
  }
});

// create route
logsController.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

// Route to delete log entry
logsController.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (logsArray[id]) {
    const deletedLog = logsArray.splice(id, 1);
    res.status(200).json(deletedLog);
  } else {
    res.redirect("/404");
  }
});

// Put Route to update single entry on logsArray
logsController.put("/:id", (req, res) => {
  const { id } = req.params;
  if (logsArray[id]) {
    logsArray[id] = req.body;
    res.status(200).json(logsArray[id]);
  } else {
    res.redirect("/404");
  }
});

module.exports = logsController;
