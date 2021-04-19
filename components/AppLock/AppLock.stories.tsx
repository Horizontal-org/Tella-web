import { storiesOf } from '@storybook/react'
import { AppLock } from './AppLock'
import { FakeConfig } from '../../moked/config'

storiesOf('App Lock', module).add('App Lock', () => {
  return <AppLock config={FakeConfig} goPrev={() => undefined} goNext={() => undefined} />
})
