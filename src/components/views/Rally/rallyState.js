import { stations } from './stations.js'

export const creatureIds = stations.filter(station => station.id < 9).map(station => station.id)
export function initialRallyState(roundId = 'initial') {
  return {
    version: 1,
    roundId,
    creatureNames: stations.slice(0, 8).map(station => station.name),
    digits: stations.slice(0, 8).map(station => station.codeDigit),
    energy: 100,
    foundIds: [],
    releasedIds: [],
    homeIds: []
  }
}
export function readRallyState(data = {}) {
  const ids = (value, max) => Array.isArray(value) ? [...new Set(value.filter(id => Number.isInteger(id) && id >= 1 && id <= max))] : []
  const releasedIds = ids(data.releasedIds, 8)
  return {
    ...initialRallyState(typeof data.roundId === 'string' ? data.roundId : 'legacy'),
    energy: Number.isFinite(data.energy) ? Math.max(0, Math.min(100, data.energy)) : 100,
    foundIds: ids(data.foundIds, 9),
    releasedIds,
    homeIds: ids(data.homeIds, 8).filter(id => releasedIds.includes(id))
  }
}
export function mergeRescuedCreatures(existing, state, activeId) {
  const ids = new Set(existing.map(station => station.id))
  // Old home-flight records must not remove creatures collected again locally.
  // Actual departures remove them in Rally.vue after their flight animation.
  for (const id of state.releasedIds) {
    if (id !== activeId && state.foundIds.includes(id) && !state.homeIds.includes(id)) ids.add(id)
  }
  return stations.filter(station => station.id < 9 && ids.has(station.id))
}
