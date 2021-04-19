import { storiesOf } from '@storybook/react'
import { NavigateButtonsBar } from './NavigateButtonsBar'

storiesOf('Navigation Buttons Bar', module).add('Navigation Buttons Bar', () => {
  return <NavigateButtonsBar goPrev={() => undefined} goNext={() => undefined} />
})
