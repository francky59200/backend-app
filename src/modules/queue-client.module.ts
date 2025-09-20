import { Module } from '@nestjs/common'
import { QueueClientController } from '../queue-client/queue-client.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { QueueClient } from '../database/entities/queueClient.entity'
import { QueueClientService } from '../queue-client/queue-client.service'

@Module({
  imports: [TypeOrmModule.forFeature([QueueClient])],
  controllers: [QueueClientController],
  providers: [QueueClientService],
})
export class QueueClientModule {}
