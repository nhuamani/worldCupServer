import * as service from '../services/team.service.js'

export async function getTeams(req, res) {
  try {
    const data = await service.listTeams()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export async function getTeam(req, res) {
  try {
    const data = await service.detailTeam(req.params.id)
    res.json(data)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

export async function createTeam(req, res) {
  try {
    const data = await service.addTeam(req.body)
    res.status(201).json(data)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export async function updateTeam(req, res) {
  try {
    const data = await service.editTeam(req.params.id, req.body)
    res.json(data)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export async function deleteTeam(req, res) {
  try {
    await service.removeTeam(req.params.id)
    res.json({ message: 'Deleted successfully' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
