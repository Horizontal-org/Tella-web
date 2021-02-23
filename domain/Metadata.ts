import ReactNode from 'react'

export interface FileObj {
  path?: string
  hash?: int
  date?: Date

}

export interface DeviceObj {
  manufacturer?: string
  hardware?: string
  deviceId?: int
  screenSize?: float
  language?: string
  locale?: string
  connection?: string
  networkType?: string
  wifiMAC?: string
  ipv4?: string
  ipv6?: string
}

export interface Location {
  latitude: float
  longitude: float
  altitude: float
  accuracy: float
  timestamp: int
}

export interface EnvironmentObj {
  location?: Location
  locationProvider?: string
  speed?: float
  cellInfo?: int[]
  wifiInfo?: string[]
}
