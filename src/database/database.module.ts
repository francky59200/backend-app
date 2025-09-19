import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'
import { Merchant } from './entities/merchant.entity'
import { Queue } from './entities/queue.entity'
import { QueueClient } from './entities/queueClient.entity'


dotenv.config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'shortline.proxy.rlwy.net',
      port: Number(process.env.DB_PORT) || 39876,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'qfnCpIAahrlvZxobenWSnqoBQLIPalOR',
      database: process.env.DB_NAME || 'railway',
      entities: [Merchant, Queue, QueueClient],
      synchronize: true,
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
