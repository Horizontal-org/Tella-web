import { storiesOf } from '@storybook/react'
import { FilesMokedData } from '../../moked/files'
import { Thumbnail } from '../Thumbnail/Thumbnail'
import { Slider } from './Slider'

storiesOf('Slider', module).add('Slider', () => {
  return (
    <div className="w-52">
      <Slider
        items={FilesMokedData.map((f, i) => (
          <Thumbnail file={f} key={i.toString()} box />
        ))}
      />
    </div>
  )
})
