import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common'
import { QueueService } from './queue.service'
import { CreateQueueDto } from '../dto/create-queue.dto'
import { UpdateQueueDto } from '../dto/update-queue.dto'

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Get()
  findAll() {
    return this.queueService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queueService.findOne(+id)
  }

  @Post()
  create(@Body() data: CreateQueueDto) {
    return this.queueService.create(data)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateQueueDto) {
    return this.queueService.update(+id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.queueService.remove(+id)
  }
}
