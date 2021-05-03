import { IsString, IsUUID } from 'class-validator'

export class FileDto {
  @IsUUID('4')
  id: string

  @IsString()
  fileName: string

  @IsString()
  bucket: string
}
