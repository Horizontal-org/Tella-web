import { storiesOf } from '@storybook/react'
import { MokedConfiguration } from '../../moked/configuration'
import { GenerateConfiguration } from './GenerateConfiguration'

storiesOf('Generate Configuration', module).add('Generate Configuration', () => {
  return (
    <div className="w-auto p-2">
      <GenerateConfiguration name="Test Configuration" configuration={MokedConfiguration} />
    </div>
  )
})
