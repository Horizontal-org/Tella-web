import { storiesOf } from '@storybook/react'
import { Camouflage } from './Camouflage'
import { FakeConfig } from '../../moked/config'

storiesOf('Camouflage', module).add('Camouflage', () => {
  return <Camouflage config={FakeConfig} goPrev={() => undefined} goNext={console.log} />
})
