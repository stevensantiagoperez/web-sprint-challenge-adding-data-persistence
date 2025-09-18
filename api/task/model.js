// build your `Task` model here
const db = require('../../data/dbConfig')

async function getAll() {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    )
}

async function getById(task_id) {
  return db('tasks').where({ task_id }).first()
}

async function create(task) {
  const [id] = await db('tasks').insert(task)
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  create,
}