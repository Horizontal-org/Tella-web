import { storiesOf } from '@storybook/react'
import { MdCloudUpload } from '@react-icons/all-files/md/MdCloudUpload'
import { MdPersonOutline } from '@react-icons/all-files/md/MdPersonOutline'
import { MdSettings } from '@react-icons/all-files/md/MdSettings'

import { NavButton } from './NavButton'

const menuExample = [
  { title: 'Reports', icon: <MdCloudUpload /> },
  { title: 'Users', icon: <MdPersonOutline /> },
  { title: 'Administration', icon: <MdSettings /> },
]

storiesOf('Navigation Button', module)
  .add('With text and icon', () => <NavButton text="Upload" icon={<MdCloudUpload />} />)
  .add('In a menu', () => {
    return (
      <ul className="flex flex-col w-full">
        {menuExample.map((data) => (
          <NavButton key={data.title} text={data.title} icon={data.icon} />
        ))}
      </ul>
    )
  })
  .add('Only text', () => <NavButton text="Profile" />)
