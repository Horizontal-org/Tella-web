import namor from 'namor'
import { Configuration } from '../../domain/Configuration'
import { Report } from '../../domain/Report'
import { FilesMokedData } from '../../moked/files'

const range = (amount: number) => {
  const arr: number[] = []
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < amount; i += 1) {
    arr.push(i)
  }
  return arr
}

const randomSentence = (amount: number): string => {
  return namor
    .generate({ words: amount, separator: ' ', numbers: 0, saltLength: 0 })
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
}

const randomId = () => namor.generate({ words: 0, numbers: 1 })

const newReport = (): Report => {
  return {
    id: randomId(),
    name: randomSentence(3),
    reporter: {
      id: randomId(),
      name: randomSentence(2),
    },
    files: FilesMokedData,
    date: Date.now(),
  }
}

const newConfiguration = (): Configuration => {
  return {
    id: randomId(),
    name: randomSentence(3),
    date: Date.now(),
    status: 'Draft',
    connections: Math.round(Math.random() * 100),
    applock: [false, false, false],
    camouflage: [false, false, false],
  }
}

export const makeReportData = (amount: number): Report[] => {
  return range(amount).map(newReport)
}

export const makeConfigurationData = (amount: number): Configuration[] => {
  return range(amount).map(newConfiguration)
}
