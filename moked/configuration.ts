import { Lock, Method, Camouflage, CrashReport, Configuration, ConfigurationJSON } from '../domain/Configuration'

export const MokedJSON : ConfigurationJSON = {
  configuration: {
    name: "test json file",
    about: "This is the about section",
    lock: "PIN",
    method: "DOWNLOAD",
    camouflage: "CAMERA",
    crashReport: {
      share: false,
      changeable: false
    }
  }
}
