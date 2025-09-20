import { Module } from '@nestjs/common'
import * as dotenv from 'dotenv'
import { DatabaseModule } from './database/database.module'
import { MerchantModule } from './modules/merchant.module'
import { QueueModule } from './modules/queue.module'
import { QueueClientModule } from './modules/queue-client.module'

dotenv.config()

@Module({
  imports: [DatabaseModule, MerchantModule, QueueModule, QueueClientModule],
})
export class AppModule {}
