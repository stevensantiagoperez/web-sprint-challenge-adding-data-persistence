// build your `/api/tasks` router here
const router = require("express").Router();
const Task = require('./model');

router.get('/',  (req, res) => {
  res.json({ api: "up" });
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: "something went wrong in the task router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;