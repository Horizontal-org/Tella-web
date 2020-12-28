/* eslint-disable no-alert */
import { CSSProperties } from 'react'
import { storiesOf } from '@storybook/react'
import { Thumbnail } from './Thumbnail'
import { ReportFile } from '../../domain/ReportFile'

const titleStyle: CSSProperties = {
  fontSize: '27px',
  fontWeight: 500,
  color: '#666',
}

const files: ReportFile[] = [
  {
    type: 'video',
    src: {
      path: '',
      name: '',
      hash: '',
    },
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
  },
  {
    type: 'file',
    src: {
      path: '',
      name: '',
      hash: '',
    },
  },
]

storiesOf('Thumbnail', module).add('Thumbnail', () => (
  <div className="max-w-xs">
    {files.map((file) => (
      <div key={file.type}>
        <h3 style={titleStyle} className="text-xl py-4 capitalize">
          {file.type}
        </h3>
        <Thumbnail file={file} onClick={() => alert(`Click on ${file.type}`)} />
      </div>
    ))}
  </div>
))
