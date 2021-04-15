import { FunctionComponent } from 'react'

import { SettingsButton } from '../SettingsButton/SettingsButton'
import { NavigateButtonsBar } from '../NavigateButtonsBar/NavigateButtonsBar'
import { CamouflageChoice, Configuration } from '../../domain/Configuration'

type Props = {
  config: Configuration
  goPrev: () => void
  goNext: () => void
}

export const Camouflage: FunctionComponent<Props> = ({ config, goPrev, goNext }) => {
  return (
    <div className="block w-auto">
      <p className="text-xxxl font-extrablack text-black justify-center items-center text-center p-xxxsm mt-xxxxl">
        {' '}
        Camouflage{' '}
      </p>
      <p className="text-base font-medium text-grey-500 justify-center items-center text-center mb-xxl">
        {' '}
        What camouflage option(s) should be available to users?{' '}
      </p>
      <div className="flex flex-row justify-center gap-10">
        <SettingsButton
          itemSettings={config.camouflage}
          id={CamouflageChoice.ICON}
          type="Icon"
          description="The user picks a new name and icon"
        />
        <SettingsButton
          itemSettings={config.camouflage}
          id={CamouflageChoice.CALCULATOR}
          type="Calculator"
          description="The user enters their pin in a calculator"
        />
        <SettingsButton
          itemSettings={config.camouflage}
          id={CamouflageChoice.NOTEPAD}
          type="Notepad"
          description="The user enters 6 or more letters or numbers"
        />
      </div>
      <p className="text-base font-medium text-grey-500 justify-center items-center text-center mt-xxxxl">
        {' '}
        Select at least one option above.
      </p>
      <NavigateButtonsBar goPrev={goPrev} goNext={goNext} />
    </div>
  )
}
