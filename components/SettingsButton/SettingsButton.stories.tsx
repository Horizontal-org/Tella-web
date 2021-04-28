import { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { SettingsButton } from './SettingsButton'

storiesOf('Settings Toggle Button', module).add('Settings Toggle Button', () => {
  const [selected, setSelected] = useState(false)
  return (
    <div className="flex flex-row">
      <SettingsButton
        onClick={() => setSelected(!selected)}
        selected={selected}
        type="Setting"
        description="Click to enable this setting"
      />
    </div>
  )
})
