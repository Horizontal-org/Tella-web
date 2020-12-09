import { FC, ReactNode } from 'react'

import style from './NavButton.module.scss'

type Props = {
  text: string
  icon?: ReactNode
  disabled?: boolean
  selected?: boolean
}

export const NavButton: FC<Props> = ({ text, icon, disabled, selected }: Props) => {
  return (
    <div
      className={[
        style.navButton,
        disabled ? style.disabled : style.enabled,
        selected ? style.selected : '',
      ].join(' ')}
    >
      <span className="flex items-center justify-center text-xl">{icon}</span>
      <span className="ml-3">{text}</span>
    </div>
  )
}

NavButton.defaultProps = {
  icon: undefined,
  disabled: false,
  selected: false,
}
