import { FunctionComponent, CSSProperties } from 'react'

import { Camouflage } from '../../components/Camouflage/Camouflage'
import { NavigateButtonsBar } from '../../components/NavigateButtonsBar/NavigateButtonsBar'
import { CamouflageChoice, Configuration } from '../../domain/Configuration'

const titleStyle: CSSProperties = {
  fontSize: '25px',
  fontWeight: 1000,
  color: 'black',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '5px',
  marginTop: '80px',
}
const subtitleStyle: CSSProperties = {
  fontSize: '15px',
  fontWeight: 500,
  color: 'gray',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  marginBottom: '60px',
}

const bottomStyle: CSSProperties = {
  fontSize: '15px',
  fontWeight: 500,
  color: 'gray',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: '80px',
}

type Props = {
  config: Configuration
  goPrev: () => void
  goNext: () => void
}

export const CamouflageLayout: FunctionComponent<Props> = ({ config, goPrev, goNext }) => {
  return (
    <div className="block w-auto">
      <p style={titleStyle}> Camouflage </p>
      <p style={subtitleStyle}> What camouflage option(s) should be available to users? </p>
      <div className="flex flex-row justify-center gap-10">
        <Camouflage
          config={config}
          id={CamouflageChoice.ICON}
          type="Icon"
          description="The user picks a new name and icon"
        />
        <Camouflage
          config={config}
          id={CamouflageChoice.CALCULATOR}
          type="Calculator"
          description="The user enters their pin in a calculator"
        />
        <Camouflage
          config={config}
          id={CamouflageChoice.NOTEPAD}
          type="Notepad"
          description="The user enters 6 or more letters or numbers"
        />
      </div>
      <p style={bottomStyle}> Select at least one option above.</p>
      <NavigateButtonsBar goPrev={goPrev} goNext={goNext} />
    </div>
  )
}
