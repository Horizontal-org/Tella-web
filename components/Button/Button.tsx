import { FunctionComponent, ReactNode } from 'react'
import cn from 'classnames'

export enum btnType {
  'Primary',
  'Secondary',
}

interface Props {
  text?: string
  icon?: ReactNode
  disabled?: boolean
  full?: boolean
  type?: btnType
  onClick?: (event: unknown) => void
  onBlur?: (event: unknown) => void
}

export const Button: FunctionComponent<Props> = ({
  text,
  disabled,
  icon,
  type,
  onClick,
  full,
  onBlur,
}: Props) => {
  const btnStyle = cn(
    'flex flex-none w-auto py-1 px-2 space-x-2 rounded items-center text-sm font-bold font-sans uppercase border border-gray-100 active:shadow-inbox disabled:opacity-50 focus:outline-none',
    {
      'text-white bg-blue-300 hover:bg-blue-400': type === btnType.Primary,
      'text-gray-300 bg-white hover:bg-gray-50': type === btnType.Secondary,
      'cursor-not-allowed': disabled === true,
      'flex-1 w-100 flex-col': full,
    }
  )

  return (
    <button
      type="button"
      disabled={disabled}
      className={btnStyle}
      onClick={onClick}
      onBlur={onBlur}
    >
      {icon && <span className="text-base">{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  )
}

Button.defaultProps = {
  icon: undefined,
  text: undefined,
  disabled: false,
  full: false,
  type: btnType.Primary,
  onClick: () => null,
  onBlur: () => null,
}
