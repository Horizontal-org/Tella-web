/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FunctionComponent, MouseEventHandler, PropsWithChildren } from 'react'

type Props = {
  leftToggle: MouseEventHandler
  rightToggle: MouseEventHandler
}

export const ToggleButtonsBar: FunctionComponent<PropsWithChildren<Props>> = ({
  leftToggle,
  rightToggle,
  children,
}) => (
  <div id="slider-bar" className="flex px-4">
    <div>
      <img
        src="/images/handbar-toggle.png"
        alt="Toggle left sidebar"
        className="cursor-pointer border-r my-2 py-1 pr-3"
        onClick={leftToggle}
      />
    </div>

    <div className="flex-1 flex justify-between">{children}</div>

    <div>
      <img
        src="/images/handbar-toggle.png"
        alt="Toggle right sidebar"
        className="cursor-pointer transform rotate-180 border-r my-2 py-1 pr-3"
        onClick={rightToggle}
      />
    </div>
  </div>
)
