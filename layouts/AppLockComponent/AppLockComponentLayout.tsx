import { FunctionComponent, CSSProperties, useEffect, useState } from 'react'

import { AppLockComponent } from '../../components/AppLockComponent/AppLockComponent'

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

export const AppLockComponentLayout: FunctionComponent = () => {
  const [pattern, updatePattern] = useState(false)
  const [pin, updatePin] = useState(false)
  const [password, upadatePassword] = useState(false)

  return (
    <>
      <p style={titleStyle}> App Lock </p>
      <p style={subtitleStyle}> What lock(s) should be available to users? </p>
      <div className="flex flex-row justify-center gap-10">
        <AppLockComponent
          id={1}
          type="Pattern"
          description="Draw a simple pattern with your finger"
          callback={updatePattern}
        />
        <AppLockComponent
          id={2}
          type="Pin"
          description="The user enters 6 or more numbers"
          callback={updatePin}
        />
        <AppLockComponent
          id={3}
          type="Password"
          description="The user enters 6 or more letters or numbers"
          callback={upadatePassword}
        />
      </div>
      <p style={bottomStyle}> The user will be able to set a Pattern or a PIN as their app lock.</p>
    </>
  )
}
