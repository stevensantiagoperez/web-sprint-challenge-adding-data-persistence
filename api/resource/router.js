// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')
const router = express.Router()

// [GET] /api/resources
router.get('/', async (req, res, next) => {
  try {
    const resources = await Resources.getAll()
    res.json(resources)
  } catch (err) {
    next(err)
  }
})

// [POST] /api/resources
router.post('/', async (req, res, next) => {
  try {
    const newResource = await Resources.create(req.body)
    res.status(201).json(newResource)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: "something went wrong in the resource router",
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router