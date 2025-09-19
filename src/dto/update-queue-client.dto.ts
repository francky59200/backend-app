import { IsOptional, IsIn } from 'class-validator'

export class UpdateQueueClientDto {
  @IsOptional()
  @IsIn(['waiting', 'called', 'served'])
  status?: 'waiting' | 'called' | 'served'
}
