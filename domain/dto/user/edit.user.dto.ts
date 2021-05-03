import { IsUUID } from 'class-validator'

export class EditUserDto {
  @IsUUID('4')
  id?: string

  isAdmin?: boolean
}
