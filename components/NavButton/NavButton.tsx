import { FunctionComponent, ReactNode } from 'react'

type Props = {
  text: string
  icon?: ReactNode
  disabled?: boolean
  selected?: boolean
  onClick?: (event: unknown) => void
}

const baseStyle =
  'flex flex-row font-bold items-center h-10 px-4 rounded text-base bg-white text-gray-500'
const enableStyle = 'hover:bg-black hover:bg-opacity-5 hover:text-gray-700 cursor-pointer'
const disabledStyle = 'opacity-40 cursor-not-allowed'
const selectedStyle = 'bg-blue-light text-blue-500'

export const NavButton: FunctionComponent<Props> = ({
  text,
  icon,
  disabled,
  selected,
  onClick,
}: Props) => {
  return (
    <div
      className={[
        baseStyle,
        disabled ? disabledStyle : enableStyle,
        selected ? selectedStyle : '',
      ].join(' ')}
      onClick={onClick}
      aria-hidden="true" // TODO: a11y
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
  onClick: () => null,
}
