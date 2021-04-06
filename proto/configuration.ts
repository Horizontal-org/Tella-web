/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tellaweb'

export enum Lock {
  PATTERN = 0,
  PIN = 1,
  PASSWORD = 2,
  UNRECOGNIZED = -1,
}

export function lockFromJSON(object: any): Lock {
  switch (object) {
    case 0:
    case 'PATTERN':
      return Lock.PATTERN
    case 1:
    case 'PIN':
      return Lock.PIN
    case 2:
    case 'PASSWORD':
      return Lock.PASSWORD
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Lock.UNRECOGNIZED
  }
}

export function lockToJSON(object: Lock): string {
  switch (object) {
    case Lock.PATTERN:
      return 'PATTERN'
    case Lock.PIN:
      return 'PIN'
    case Lock.PASSWORD:
      return 'PASSWORD'
    default:
      return 'UNKNOWN'
  }
}

export enum Method {
  DOWNLOAD = 0,
  CODE = 1,
  QR = 2,
  UNRECOGNIZED = -1,
}

export function methodFromJSON(object: any): Method {
  switch (object) {
    case 0:
    case 'DOWNLOAD':
      return Method.DOWNLOAD
    case 1:
    case 'CODE':
      return Method.CODE
    case 2:
    case 'QR':
      return Method.QR
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Method.UNRECOGNIZED
  }
}

export function methodToJSON(object: Method): string {
  switch (object) {
    case Method.DOWNLOAD:
      return 'DOWNLOAD'
    case Method.CODE:
      return 'CODE'
    case Method.QR:
      return 'QR'
    default:
      return 'UNKNOWN'
  }
}

export enum Camouflage {
  CALCULATOR = 0,
  CAMERA = 1,
  NAME = 2,
  UNRECOGNIZED = -1,
}

export function camouflageFromJSON(object: any): Camouflage {
  switch (object) {
    case 0:
    case 'CALCULATOR':
      return Camouflage.CALCULATOR
    case 1:
    case 'CAMERA':
      return Camouflage.CAMERA
    case 2:
    case 'NAME':
      return Camouflage.NAME
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Camouflage.UNRECOGNIZED
  }
}

export function camouflageToJSON(object: Camouflage): string {
  switch (object) {
    case Camouflage.CALCULATOR:
      return 'CALCULATOR'
    case Camouflage.CAMERA:
      return 'CAMERA'
    case Camouflage.NAME:
      return 'NAME'
    default:
      return 'UNKNOWN'
  }
}

export interface CrashReport {
  share: boolean
  changeable: boolean
}

export interface Configuration {
  name: string
  about: string
  lock: Lock
  method: Method
  camouflage: Camouflage
  crashReport: CrashReport | undefined
}

const baseCrashReport: object = { share: false, changeable: false }

export const CrashReport = {
  encode(message: CrashReport, writer: Writer = Writer.create()): Writer {
    if (message.share === true) {
      writer.uint32(8).bool(message.share)
    }
    if (message.changeable === true) {
      writer.uint32(16).bool(message.changeable)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): CrashReport {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCrashReport } as CrashReport
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.share = reader.bool()
          break
        case 2:
          message.changeable = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CrashReport {
    const message = { ...baseCrashReport } as CrashReport
    if (object.share !== undefined && object.share !== null) {
      message.share = Boolean(object.share)
    } else {
      message.share = false
    }
    if (object.changeable !== undefined && object.changeable !== null) {
      message.changeable = Boolean(object.changeable)
    } else {
      message.changeable = false
    }
    return message
  },

  toJSON(message: CrashReport): unknown {
    const obj: any = {}
    message.share !== undefined && (obj.share = message.share)
    message.changeable !== undefined && (obj.changeable = message.changeable)
    return obj
  },

  fromPartial(object: DeepPartial<CrashReport>): CrashReport {
    const message = { ...baseCrashReport } as CrashReport
    if (object.share !== undefined && object.share !== null) {
      message.share = object.share
    } else {
      message.share = false
    }
    if (object.changeable !== undefined && object.changeable !== null) {
      message.changeable = object.changeable
    } else {
      message.changeable = false
    }
    return message
  },
}

const baseConfiguration: object = { name: '', about: '', lock: 0, method: 0, camouflage: 0 }

export const Configuration = {
  encode(message: Configuration, writer: Writer = Writer.create()): Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.about !== '') {
      writer.uint32(18).string(message.about)
    }
    if (message.lock !== 0) {
      writer.uint32(24).int32(message.lock)
    }
    if (message.method !== 0) {
      writer.uint32(32).int32(message.method)
    }
    if (message.camouflage !== 0) {
      writer.uint32(40).int32(message.camouflage)
    }
    if (message.crashReport !== undefined) {
      CrashReport.encode(message.crashReport, writer.uint32(50).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Configuration {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseConfiguration } as Configuration
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        case 2:
          message.about = reader.string()
          break
        case 3:
          message.lock = reader.int32() as any
          break
        case 4:
          message.method = reader.int32() as any
          break
        case 5:
          message.camouflage = reader.int32() as any
          break
        case 6:
          message.crashReport = CrashReport.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Configuration {
    const message = { ...baseConfiguration } as Configuration
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.about !== undefined && object.about !== null) {
      message.about = String(object.about)
    } else {
      message.about = ''
    }
    if (object.lock !== undefined && object.lock !== null) {
      message.lock = lockFromJSON(object.lock)
    } else {
      message.lock = 0
    }
    if (object.method !== undefined && object.method !== null) {
      message.method = methodFromJSON(object.method)
    } else {
      message.method = 0
    }
    if (object.camouflage !== undefined && object.camouflage !== null) {
      message.camouflage = camouflageFromJSON(object.camouflage)
    } else {
      message.camouflage = 0
    }
    if (object.crashReport !== undefined && object.crashReport !== null) {
      message.crashReport = CrashReport.fromJSON(object.crashReport)
    } else {
      message.crashReport = undefined
    }
    return message
  },

  toJSON(message: Configuration): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.about !== undefined && (obj.about = message.about)
    message.lock !== undefined && (obj.lock = lockToJSON(message.lock))
    message.method !== undefined && (obj.method = methodToJSON(message.method))
    message.camouflage !== undefined && (obj.camouflage = camouflageToJSON(message.camouflage))
    message.crashReport !== undefined &&
      (obj.crashReport = message.crashReport ? CrashReport.toJSON(message.crashReport) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<Configuration>): Configuration {
    const message = { ...baseConfiguration } as Configuration
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.about !== undefined && object.about !== null) {
      message.about = object.about
    } else {
      message.about = ''
    }
    if (object.lock !== undefined && object.lock !== null) {
      message.lock = object.lock
    } else {
      message.lock = 0
    }
    if (object.method !== undefined && object.method !== null) {
      message.method = object.method
    } else {
      message.method = 0
    }
    if (object.camouflage !== undefined && object.camouflage !== null) {
      message.camouflage = object.camouflage
    } else {
      message.camouflage = 0
    }
    if (object.crashReport !== undefined && object.crashReport !== null) {
      message.crashReport = CrashReport.fromPartial(object.crashReport)
    } else {
      message.crashReport = undefined
    }
    return message
  },
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
