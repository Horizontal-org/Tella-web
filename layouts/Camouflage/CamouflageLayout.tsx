import { CSSProperties, FunctionComponent } from 'react'

import { Camouflage } from '../../components/Camouflage/Camouflage'

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

export const CamouflageLayout: FunctionComponent = () => {
  return (
    <>
      <p style={titleStyle}> Camouflage </p>
      <p style={subtitleStyle}> What camouflage option(s) should be available to users? </p>
      <div className="flex flex-row justify-center gap-10">
        <Camouflage />
        <Camouflage />
        <Camouflage />
      </div>
      <p style={bottomStyle}> Select at least one option above.</p>
    </>
  )
}
