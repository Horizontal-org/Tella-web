import { FunctionComponent, CSSProperties } from 'react'

import { AppLockComponent } from '../../components/AppLockComponent/AppLockComponent'
import { NavigateButtonsBar } from '../../components/NavigateButtonsBar/NavigateButtonsBar'
import { AppLockChoice, Configuration } from '../../domain/Configuration'

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

export const AppLockComponentLayout: FunctionComponent<Props> = ({ config, goPrev, goNext }) => {
  return (
    <div className="block w-auto">
      <p style={titleStyle}> App Lock </p>
      <p style={subtitleStyle}> What lock(s) should be available to users? </p>
      <div className="flex flex-row justify-center gap-10">
        <AppLockComponent
          config={config}
          id={AppLockChoice.PATTERN}
          type="Pattern"
          description="Draw a simple pattern with your finger"
        />
        <AppLockComponent
          config={config}
          id={AppLockChoice.PIN}
          type="Pin"
          description="The user enters 6 or more numbers"
        />
        <AppLockComponent
          config={config}
          id={AppLockChoice.PASSWORD}
          type="Password"
          description="The user enters 6 or more letters or numbers"
        />
      </div>
      <p style={bottomStyle}> The user will be able to set a Pattern or a PIN as their app lock.</p>
      <NavigateButtonsBar goPrev={goPrev} goNext={goNext} />
    </div>
  )
}
