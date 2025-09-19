import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common'
import { QueueClientService } from './queue-client.service'
import { CreateQueueClientDto } from '../dto/create-queue-client.dto'
import { UpdateQueueClientDto } from '../dto/update-queue-client.dto'

@Controller('queue-client')
export class QueueClientController {
  constructor(private readonly queueClientService: QueueClientService) {}

  @Get()
  findAll() {
    return this.queueClientService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queueClientService.findOne(+id)
  }

  @Post()
  create(@Body() data: CreateQueueClientDto) {
    return this.queueClientService.create(data)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateQueueClientDto) {
    return this.queueClientService.update(+id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.queueClientService.remove(+id)
  }
}
