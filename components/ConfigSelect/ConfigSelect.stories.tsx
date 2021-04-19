import { storiesOf } from '@storybook/react'
import { ConfigSelect } from './ConfigSelect'

storiesOf('Configuration Select', module).add('Configuration Select', () => {
  return <ConfigSelect appLockCB={() => undefined} camouflageCB={() => undefined} />
})
