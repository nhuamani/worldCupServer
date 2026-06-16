import { pool } from '../configs/database.js'

export async function getAllTeams() {
  const [rows] = await pool.query('SELECT * FROM worldcup_db.teams')
  return rows
}

export async function getTeamById(id) {
  const [rows] = await pool.query(
    'SELECT * FROM worldcup_db.teams WHERE id = ?',
    [id]
  )
  return rows[0]
}

export async function createTeam(data) {
  const [result] = await pool.query(
    'INSERT INTO worldcup_db.teams (name, country) VALUES (?, ?)',
    [data.name, data.country]
  )

  return { id: result.insertId, ...data }
}

export async function updateTeam(id, data) {
  await pool.query('UPDATE teams SET name = ?, country = ? WHERE id = ?', [
    data.name,
    data.country,
    id,
  ])

  return getTeamById(id)
}

export async function deleteTeam(id) {
  await pool.query('DELETE FROM teams WHERE id = ?', [id])
  return true
}
