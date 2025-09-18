// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAll() {
  const rows = await db('projects')
  return rows.map(row => ({
    ...row,
    project_completed: row.project_completed === 1
  }))
}

async function getById(id) {
  const row = await db('projects').where('project_id', id).first()
  if (!row) return null
  return {
    ...row,
    project_completed: row.project_completed === 1
  }
}

async function create(project) {
  const [id] = await db('projects').insert(project)
  return getById(id)
}

module.exports = { getAll, getById, create }