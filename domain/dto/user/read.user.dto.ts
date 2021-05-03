import { classToPlain } from 'class-transformer'
import { IsEnum, IsString, IsUUID } from 'class-validator'
import { Dto } from '../../Dto'
import { RolesUser } from '../../RolesUser'

export class ReadUserDto implements Dto {
  toPlain(): Record<string, unknown> {
    return classToPlain(this)
  }

  @IsUUID('4')
  id: string

  @IsString()
  username: string

  @IsEnum(RolesUser)
  role: RolesUser
}
