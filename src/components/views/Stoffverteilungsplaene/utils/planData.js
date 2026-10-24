import tggCsv from '../data/stoffverteilungsplan-3tgg2-1.csv?raw'
import tgg2Csv from '../data/stoffverteilungsplan-3tgg2.csv?raw'
import bkgdCsv from '../data/stoffverteilungsplan-3bkgd1-1.csv?raw'
import metCsv from '../data/stoffverteilungsplan-3bkgd1-1-met.csv?raw'
import bpkCsv from '../data/stoffverteilungsplan-1bfd1-bpk.csv?raw'

export const plans = {
  '3tgg1-2': { name: '3TGG1/2', csv: tggCsv, hoursColumn: 4 },
  '3tgg2': { name: '3TGG2', csv: tgg2Csv, hoursColumn: 4 },
  '3bkgd1-1': { name: '3BKGD1/1 GRD', csv: bkgdCsv },
  '3bkgd1-1-met': { name: '3BKGD1/1 MET', csv: metCsv },
  '1bfd1-bpk': { name: '1BFD1 BPK', csv: bpkCsv, hoursColumn: 4 }
}

export const parseCsvLine = (line) => {
  const cells = []
  let current = ''
  let inQuotes = false

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index]
    const nextChar = line[index + 1]

    if (char === '"' && nextChar === '"') {
      current += '"'
      index += 1
      continue
    }

    if (char === '"') {
      inQuotes = !inQuotes
      continue
    }

    if (char === ',' && !inQuotes) {
      cells.push(current)
      current = ''
      continue
    }

    current += char
  }

  cells.push(current)
  return cells
}

