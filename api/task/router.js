// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')
const router = express.Router()

// [GET] /api/tasks
router.get('/', async (req, res, next) => {
  try {
    const tasks = await Tasks.getAll()
    // Convert task_completed 0/1 -> true/false
    const formatted = tasks.map(task => ({
      ...task,
      task_completed: task.task_completed ? true : false
    }))
    res.json(formatted)
  } catch (err) {
    next(err)
  }
})

// [POST] /api/tasks
router.post('/', async (req, res, next) => {
  try {
    const newTask = await Tasks.create(req.body)
    res.status(201).json({
      ...newTask,
      task_completed: newTask.task_completed ? true : false
    })
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: "something went wrong in the task router",
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router