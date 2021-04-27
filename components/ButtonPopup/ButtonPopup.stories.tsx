import { storiesOf } from '@storybook/react'
import { ButtonPopup } from './ButtonPopup'

storiesOf('Button with Popup', module).add('Button with Popup', () => {
  return (
    <ButtonPopup>
      <p>Hello I'm a popup!</p>
    </ButtonPopup>
  )
})
