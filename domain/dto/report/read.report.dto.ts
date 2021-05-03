import { Type } from 'class-transformer'
import { IsString, IsUUID } from 'class-validator'
import { FileDto } from '../file'
import { ReadUserDto } from '../user'

export class ReadReportDto {
  @IsUUID('4')
  id: string

  @IsString()
  readonly title: string

  @IsString()
  readonly description: string

  @Type(() => FileDto)
  files: FileDto[]

  @Type(() => ReadUserDto)
  author: ReadUserDto
}
