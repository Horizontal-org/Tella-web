import { FunctionComponent, ReactNode } from 'react'
import classnames from 'classnames'

export enum btnType {
  'Primary',
  'Secondary',
}

interface Props {
  text: string
  icon?: ReactNode
  disabled?: boolean
  type?: btnType
}

export const Button: FunctionComponent<Props> = ({ text, disabled, icon, type }: Props) => {
  const btnStyle = classnames({
    'flex flex-none w-auto py-1 rounded items-center text-sm font-bold font-osans uppercase border border-gray-300 active:shadow-inbox disabled:opacity-50': true,
    'text-white bg-blue-300 hover:bg-blue-400': type === btnType.Primary,
    'text-gray-500 bg-white hover:bg-gray-100': type === btnType.Secondary,
  })

  return (
    <button type="button" disabled={disabled} className={btnStyle}>
      {icon && <span className="text-base ml-2">{icon}</span>}
      <span className={`${!icon ? 'mx-3' : 'mx-2'}`}> {text}</span>
    </button>
  )
}

Button.defaultProps = {
  icon: undefined,
  disabled: false,
  type: btnType.Primary,
}
