import { Item } from './Item'

export enum AppLockChoice {
  PATTERN,
  PIN,
  PASSWORD,
}

export enum CamouflageChoice {
  ICON,
  CALCULATOR,
  NOTEPAD,
}

export class Configuration extends Item {
  date: number

  connections: number

  status: string

  applock: [boolean, boolean, boolean]

  camouflage: [boolean, boolean, boolean]
}
