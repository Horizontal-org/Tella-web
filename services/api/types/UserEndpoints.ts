import { EditUserDto, ReadUserDto } from '../../../domain/dto/user'

export interface UserEndpoints {
  create: (
    data: EditUserDto,
    params?: {
      id: string
    },
    query?: Record<string, unknown>
  ) => Promise<ReadUserDto>
  toggleRole: (
    data: EditUserDto,
    params?: {
      id: string
    },
    query?: Record<string, unknown>
  ) => Promise<ReadUserDto>
}
