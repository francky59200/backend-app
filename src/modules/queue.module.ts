import { Module } from '@nestjs/common'
import { QueueController } from '../queue/queue.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Queue } from '../database/entities/queue.entity'
import { QueueService } from '../queue/queue.service'

@Module({
  imports: [TypeOrmModule.forFeature([Queue])],
  controllers: [QueueController],
  providers: [QueueService],
})
export class QueueModule {}
