import { storiesOf } from '@storybook/react'
import { VerificationInformation } from './VerificationInformation'

storiesOf('Verification Information', module).add('Verification Information', () => {
  return (
    <div className="w-64 p-2">
      <VerificationInformation/>
    </div>
  )
})
