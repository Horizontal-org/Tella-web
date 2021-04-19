import { storiesOf } from '@storybook/react'
import { NewButtonPopup } from './NewButtonPopup'

storiesOf('New Button with Popup', module).add('New Button with Popup', () => {
  return (
    <NewButtonPopup>
      <p>Hello I'm a popup!</p>
    </NewButtonPopup>
  )
})
