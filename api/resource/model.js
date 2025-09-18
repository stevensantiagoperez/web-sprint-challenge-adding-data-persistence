// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getAll() {
  return db('resources')
}

async function getById(resource_id) {
  return db('resources').where({ resource_id }).first()
}

async function create(resource) {
  const [id] = await db('resources').insert(resource)
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  create,
}