import { IsOptional, IsInt, IsString } from 'class-validator'

export class UpdateQueueDto {
  @IsOptional()
  @IsInt()
  merchantId?: number

  @IsOptional()
  @IsString()
  name?: string
}
