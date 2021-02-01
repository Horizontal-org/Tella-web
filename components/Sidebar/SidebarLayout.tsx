import React, { FunctionComponent } from 'react'
import { MenuDescription } from '../../domain/Menu'
import { NavButton } from '../NavButton/NavButton'

type Props = {
  topMenu: MenuDescription[]
  bottomMenu: MenuDescription[]
}

export const SidebarLayout: FunctionComponent<Props> = ({ topMenu, bottomMenu }) => {
  return (
    <div className="flex flex-1 flex-col">
      <img
        src="./tella-sidelogo.png"
        width="125px"
        height="36px"
        alt="Tella logo"
        className="pb-16"
      />
      <div className="flex flex-col flex-1 justify-between">
        <ul className="flex flex-1 flex-col gap-2 w-full">
          {topMenu.map((data) => (
            <NavButton key={data.text} {...data} />
          ))}
        </ul>
        <ul className="flex flex-col gap-2 w-full">
          {bottomMenu.map((data) => (
            <NavButton key={data.text} {...data} />
          ))}
        </ul>
      </div>
    </div>
  )
}
