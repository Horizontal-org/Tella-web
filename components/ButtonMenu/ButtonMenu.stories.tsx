import { storiesOf } from '@storybook/react'
import { MdDelete } from '@react-icons/all-files/md/MdDelete'
import { ButtonMenu } from './ButtonMenu'
import { ButtonOption } from './ButtonOption'

storiesOf('Buttons with options', module).add('Buttons with options', () => (
  <div className="flex flex-col space-y-10 items-center">
    <div className="flex flex-col items-center">
      <h2>Open to the left</h2>
      <ButtonMenu openSide="left">
        <ButtonOption icon={<MdDelete />} text="Delete" color="#D6933B" />
        <ButtonOption icon={<MdDelete />} text="Delete not alert" color="red" />
      </ButtonMenu>
    </div>

    <div className="flex flex-col items-center">
      <h2>Open to the right</h2>
      <ButtonMenu openSide="right">
        <ButtonOption icon={<MdDelete />} text="Delete" color="#D6933B" />
        <ButtonOption icon={<MdDelete />} text="Delete not alert" color="red" />
      </ButtonMenu>
    </div>
  </div>
))
