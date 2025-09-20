import { IsInt, IsNotEmpty } from 'class-validator'

export class CreateQueueDto {
  @IsInt()
  merchantId: number

  @IsNotEmpty()
  name: string
}
