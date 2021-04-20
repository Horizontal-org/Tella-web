import { storiesOf } from '@storybook/react'
import { MokedConfiguration } from '../../moked/configuration'
import { GenerateConfiguration } from './GenerateConfiguration'

storiesOf('GenerateConfiguration', module).add('GenerateConfiguration', () => {
  return (
    <div className="w-auto p-2">
      <GenerateConfiguration name="Test Configuration" configuration={MokedConfiguration} />
    </div>
  )
})
