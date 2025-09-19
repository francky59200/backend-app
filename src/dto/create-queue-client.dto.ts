import { IsInt, IsNotEmpty, IsIn } from 'class-validator'

export class CreateQueueClientDto {
  @IsInt()
  queueId: number

  @IsNotEmpty()
  clientName: string

  @IsIn(['waiting', 'called', 'served'])
  status: 'waiting' | 'called' | 'served'
}
