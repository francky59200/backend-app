import { Module } from '@nestjs/common'
import { MerchantService } from '../merchant/merchant.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Merchant } from '../database/entities/merchant.entity'
import { MerchantController } from '../merchant/merchant.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Merchant])],
  controllers: [MerchantController],
  providers: [MerchantService],
})
export class MerchantModule {}
