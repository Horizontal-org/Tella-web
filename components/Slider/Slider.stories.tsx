/* eslint-disable no-console */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import { MdDelete } from '@react-icons/all-files/md/MdDelete'
import { storiesOf } from '@storybook/react'
import { Thumbnail } from '../Thumbnail/Thumbnail'
import { fakeFiles } from '../Thumbnail/Thumbnail.stories'
import { Slider } from './Slider'

storiesOf('Slider', module).add('Slider', () => {
  return (
    <div className="w-52">
      <Slider
        items={fakeFiles.map((f, i) => (
          <Thumbnail file={f} key={i.toString()} full />
        ))}
      />
    </div>
  )
})
