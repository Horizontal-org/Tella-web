import { Configuration } from '../proto/configuration'

export const MokedConfiguration : Configuration = {
  name: "test json file",
  about: "This is the about section",
  lock: 0,
  method: 0,
  camouflage: 0,
  crashReport: {
    share: false,
    changeable: false
  }
}
