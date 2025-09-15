// build your `/api/projects` router here
const router = require("express").Router();
const Project = require('./model')

router.get("/", (req, res) => {
  res.json({ api: "up" });
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: "something went wrong in the project router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
