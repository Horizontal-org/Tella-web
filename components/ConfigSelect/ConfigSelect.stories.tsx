import { storiesOf } from '@storybook/react'
import { ConfigSelect } from './ConfigSelect'

storiesOf('Configuration Select', module).add('Configuration Select', () => {
  return (
    <ConfigSelect
      options={[
        {
          title: 'App Lock',
          description: 'Pattern and PIN available',
          onClick: () => {
            /* do nothing */
          },
        },
        {
          title: 'Camouflage',
          description: 'Change name + icon and Calculator available',
          onClick: () => {
            /* do nothing */
          },
        },
      ]}
    />
  )
})
