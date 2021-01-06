import { FunctionComponent, ReactNode } from 'react'
import cn from 'classnames'

export enum btnType {
  'Primary',
  'Secondary',
}

interface Props {
  text: string
  icon?: ReactNode
  disabled?: boolean
  type?: btnType
  onClick?: (event: unknown) => void
}

export const Button: FunctionComponent<Props> = ({
  text,
  disabled,
  icon,
  type,
  onClick,
}: Props) => {
  const btnStyle = cn(
    'flex flex-none w-auto py-1 rounded items-center text-sm font-bold font-sans uppercase border border-gray-100 active:shadow-inbox disabled:opacity-50 focus:outline-none',
    {
      'text-white bg-blue-300 hover:bg-blue-400': type === btnType.Primary,
      'text-gray-300 bg-white hover:bg-gray-50': type === btnType.Secondary,
      'cursor-not-allowed': disabled === true,
    }
  )

  return (
    <button type="button" disabled={disabled} className={btnStyle} onClick={onClick}>
      {icon && <span className="text-base ml-2">{icon}</span>}
      <span className={`${!icon ? 'mx-3' : 'mx-2'}`}> {text}</span>
    </button>
  )
}

Button.defaultProps = {
  icon: undefined,
  disabled: false,
  type: btnType.Primary,
  onClick: () => null,
}
