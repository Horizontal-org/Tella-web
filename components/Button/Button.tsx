import { FC } from 'react'
import style from './Button.module.scss'

export const Button: FC = ({ children = null }) => <div className={style.button}>{children}</div>

export default Button
