import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Queue } from '../database/entities/queue.entity'
import { CreateQueueDto } from '../dto/create-queue.dto'
import { UpdateQueueDto } from '../dto/update-queue.dto'

@Injectable()
export class QueueService {
  constructor(
    @InjectRepository(Queue)
    private readonly queueRepo: Repository<Queue>
  ) {}

  async findAll(): Promise<Queue[]> {
    return this.queueRepo.find()
  }

  async findOne(id: number): Promise<Queue> {
    const queue = await this.queueRepo.findOneBy({ id })
    if (!queue) throw new Error(`Queue with id ${id} not found`)
    return queue
  }

  async create(data: CreateQueueDto): Promise<Queue> {
    const newQueue = this.queueRepo.create(data)
    return this.queueRepo.save(newQueue)
  }

  async update(id: number, data: UpdateQueueDto): Promise<Queue> {
    await this.queueRepo.update(id, data)
    const updated = await this.queueRepo.findOneBy({ id })
    if (!updated) throw new Error(`Queue with id ${id} not found`)
    return updated
  }

  async remove(id: number): Promise<void> {
    await this.queueRepo.delete(id)
  }
}
