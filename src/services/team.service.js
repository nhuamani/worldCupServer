import * as repo from '../repository/team.repository.js'

export async function listTeams() {
  return await repo.getAllTeams()
}

export async function detailTeam(id) {
  const team = await repo.getTeamById(id)
  if (!team) throw new Error('Team not found')
  return team
}

export async function addTeam(data) {
  if (!data.name) throw new Error('Name is required')
  return await repo.createTeam(data)
}

export async function editTeam(id, data) {
  await detailTeam(id)
  return await repo.updateTeam(id, data)
}

export async function removeTeam(id) {
  await detailTeam(id)
  return await repo.deleteTeam(id)
}
