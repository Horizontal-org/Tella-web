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
    <button
      type="button"
      onClick={leftToggle}
      className="focus:outline-none cursor-pointer border-r my-2 py-1 pr-3"
    >
      <img src="/images/handbar-toggle.png" alt="Toggle left sidebar" />
    </button>

    <div className="flex-1 flex justify-between">{children}</div>

    <button
      type="button"
      onClick={rightToggle}
      className="focus:outline-none cursor-pointer transform rotate-180 border-r my-2 py-1 pr-3"
    >
      <img src="/images/handbar-toggle.png" alt="Toggle right sidebar" />
    </button>
  </div>
)
