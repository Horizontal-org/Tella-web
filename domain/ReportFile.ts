export enum ReportFileType {
  video = 'video',
  image = 'image',
  audio = 'audio',
  file = 'file',
}

export type ReportFile = {
  src: {
    path: string
    name: string
    hash: string
  }
  size: number
  thumbnail?: string
  type: keyof typeof ReportFileType
}
