/* eslint-disable no-console */
import { storiesOf } from '@storybook/react'
import { CamouflageWizard } from './CamouflageWizard'
import { FakeConfig } from '../../moked/config'

storiesOf('Camouflage Wizard', module).add('Camouflage Wizard', () => {
  return <CamouflageWizard config={FakeConfig} goPrev={() => undefined} goNext={console.log} />
})
