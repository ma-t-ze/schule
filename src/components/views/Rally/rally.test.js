import { test } from 'node:test'
import assert from 'node:assert/strict'
import QRCode from 'qrcode'
import jsQR from 'jsqr'
import { Box3, Vector3 } from 'three'
import { stations, stationCode, parseStationCode } from './stations.js'
import { createCreature, disposeCreature } from './creatures.js'

test('Nine printed station codes round-trip through the scanner', () => {
  assert.equal(stations.length, 9)
  assert.equal(new Set(stations.slice(0, 8).map(s => s.shape)).size, 8)
  for (const station of stations) {
    const qr = QRCode.create(stationCode(station.id), { errorCorrectionLevel: 'M' })
    const scale = 6, margin = 4, width = (qr.modules.size + 2 * margin) * scale
    const pixels = new Uint8ClampedArray(width * width * 4).fill(255)
    for (let y = 0; y < width; y++) for (let x = 0; x < width; x++) {
      const row = Math.floor(y / scale) - margin, col = Math.floor(x / scale) - margin
      if (row >= 0 && col >= 0 && row < qr.modules.size && col < qr.modules.size && qr.modules.get(row, col)) {
        const offset = (y * width + x) * 4
        pixels[offset] = pixels[offset + 1] = pixels[offset + 2] = 0
      }
    }
    assert.equal(parseStationCode(jsQR(pixels, width, width).data)?.id, station.id)
  }
})
test('Unrelated codes and invalid station IDs are rejected', () => {
  for (const value of ['', 'https://example.com', 'RALLY:STATION:0', 'RALLY:STATION:10', 'RALLY:STATION:12', 'xRALLY:STATION:1', '<script>']) assert.equal(parseStationCode(value), null)
})
test('Every creature has finite geometry within the fixed camera frame', () => {
  for (const station of stations.slice(0, 8)) {
    const model = createCreature(station)
    const size = new Box3().setFromObject(model).getSize(new Vector3())
    assert.ok(size.x > 0 && size.y > 0 && size.z > 0)
    assert.ok(size.x < 2.8 && size.y < 2.8)
    assert.ok(Number.isFinite(size.length()))
    disposeCreature(model)
  }
})
