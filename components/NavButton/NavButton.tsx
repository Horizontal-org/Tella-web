import { FC, ReactNode } from 'react'

type Props = {
  text: string
  icon?: ReactNode
}

export const NavButton: FC<Props> = ({ text, icon }: Props) => {
  return (
    <div className="my-px">
      <div className="flex flex-row font-bold items-center h-10 px-4 rounded text-base text-gray-500 hover:bg-blue-light hover:text-blue-500 cursor-pointer">
        {icon && <span className="flex items-center justify-center text-xl">{icon}</span>}
        <span className="ml-3">{text}</span>
      </div>
    </div>
  )
}

NavButton.defaultProps = {
  icon: undefined,
}
