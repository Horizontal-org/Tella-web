import { storiesOf } from '@storybook/react'
import { SettingsButton } from './SettingsButton'
import { FakeConfig } from '../../moked/config'

//

storiesOf('Settings Toggle Button', module).add('Settings Toggle Button', () => {
  return (
    <div className="flex flex-row">
      <SettingsButton
        itemSettings={FakeConfig.applock}
        id={0}
        type="Setting"
        description="Click to enable this setting"
      />
    </div>
  )
})
