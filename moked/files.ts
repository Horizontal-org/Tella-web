import { ReportFile } from '../domain/ReportFile'

export const FilesMokedData: ReportFile[] = [
  {
    type: 'video',
    src: {
      path: '',
      name: '',
      hash: '',
    },
    size: Math.random() * 10000000,
    thumbnail:
      'https://wearehorizontal.org/wp-content/uploads/2020/04/SourTyre_FemaleLebaneseProtestor-MobilePhone_RomanDeckert22102019.jpg',
  },
  {
    type: 'image',
    src: {
      path: '',
      name: '',
      hash: '',
    },
    size: Math.random() * 10000000,
    thumbnail:
      'https://wearehorizontal.org/wp-content/uploads/2020/04/SourTyre_FemaleLebaneseProtestor-MobilePhone_RomanDeckert22102019.jpg',
  },
  {
    type: 'audio',
    src: {
      path: '',
      name: '',
      hash: '',
    },
    size: Math.random() * 10000000,
  },
  {
    type: 'file',
    src: {
      path: '',
      name: '',
      hash: '',
    },
    size: Math.random() * 10000000,
  },
]
