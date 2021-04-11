import { FunctionComponent, CSSProperties, useState } from 'react'

import { Camouflage } from '../../components/Camouflage/Camouflage'
import { NavigateButtonsBar } from '../../components/NavigateButtonsBar/NavigateButtonsBar'

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
  goPrev: () => void
  goNext: () => void
}

export const CamouflageLayout: FunctionComponent<Props> = ({ goPrev, goNext }) => {
  const [icon, updateIcon] = useState(false)
  const [calculator, updateCalculator] = useState(false)
  const [notepad, upadateNotepad] = useState(false)

  return (
    <div className="block w-auto">
      <p style={titleStyle}> Camouflage </p>
      <p style={subtitleStyle}> What camouflage option(s) should be available to users? </p>
      <div className="flex flex-row justify-center gap-10">
        <Camouflage
          id={1}
          type="Icon"
          description="The user picks a new name and icon"
          callback={updateIcon}
        />
        <Camouflage
          id={2}
          type="Calculator"
          description="The user enters their pin in a calculator"
          callback={updateCalculator}
        />
        <Camouflage
          id={3}
          type="Notepad"
          description="The user enters 6 or more letters or numbers"
          callback={upadateNotepad}
        />
      </div>
      <p style={bottomStyle}> Select at least one option above.</p>
      <NavigateButtonsBar goPrev={goPrev} goNext={goNext} />
    </div>
  )
}
