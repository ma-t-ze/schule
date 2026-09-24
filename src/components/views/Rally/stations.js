export const stations = [
  { id: 1, name: 'Corphish', modelUrl: '/rally/marker-1.glb', habitat: 'Der kleine Waldhüter', color: '#84c98b', shape: 'forest', size: 260 },
  { id: 2, name: 'Fuecoco', modelUrl: '/rally/marker-2.glb', habitat: 'Ein leuchtender Begleiter', color: '#fb9967', shape: 'fox', size: 250 },
  { id: 3, name: 'Shiny Feraligatr', modelUrl: '/rally/marker-3.glb', habitat: 'Leicht wie eine Wolke', color: '#c4dcff', shape: 'cloud', size: 280 },
  { id: 4, name: 'Charizard', modelUrl: '/rally/marker-4.glb', habitat: 'Der funkelnde Wächter', color: '#b6a0ff', shape: 'crystal', size: 270 },
  { id: 5, name: 'White Kyurem', modelUrl: '/rally/marker-5.glb', habitat: 'Zu Hause im Unterholz', color: '#f28ba0', shape: 'mushroom', size: 260 },
  { id: 6, name: 'Shiny Chien-Pao', modelUrl: '/rally/marker-6.glb', habitat: 'Ein Wesen aus dem Wasser', color: '#65d7df', shape: 'fish', size: 280 },
  { id: 7, name: 'Toxel', modelUrl: '/rally/marker-7.glb', habitat: 'Ein kleiner Sonnengeist', color: '#ffd36c', shape: 'sun', size: 260 },
  { id: 8, name: 'Iron Moth', modelUrl: '/rally/marker-8.glb', habitat: 'Der Hüter der Dämmerung', color: '#a999d9', shape: 'moth', size: 300 },
  { id: 9, name: 'Raumschiff', habitat: 'Der Weg nach Hause', modelUrl: '/rally/marker-9.glb', size: 300 }
]
export const stationCode = id => `RALLY:STATION:${id}`
export function parseStationCode(value) {
  const match = /^RALLY:STATION:([1-9])$/.exec(value.trim())
  return match ? stations.find(station => station.id === Number(match[1])) : null
}
