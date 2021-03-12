export enum Lock {
  PATTERN = "PATTERN",
  PIN = "PIN",
  PASSWORD = "PASSWORD"
}

export enum Method {
  DOWNLOAD = "DOWNLOAD",
  CODE = "CODE",
  QR = "QR"
}

export enum Camouflage {
  CALCULATOR = "CALCULATOR",
  CAMERA = "CAMERA",
  NAME = "NAME"
}

export interface CrashReport {
  share: boolean,
  changeable: boolean
}

export interface Configuration {
  name: string,
  about: string,
  lock: Lock,
  method: Method,
  camouflage: Camouflage,
  crashReport: CrashReport
}

export interface ConfigurationJSON {
  configuration: Configuration
}
