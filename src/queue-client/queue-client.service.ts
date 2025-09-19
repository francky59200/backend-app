import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { QueueClient } from '../database/entities/queueClient.entity'
import { CreateQueueClientDto } from '../dto/create-queue-client.dto'
import { UpdateQueueClientDto } from '../dto/update-queue-client.dto'

@Injectable()
export class QueueClientService {
  constructor(
    @InjectRepository(QueueClient)
    private readonly queueClientRepo: Repository<QueueClient>
  ) {}

  async findAll(): Promise<QueueClient[]> {
    return this.queueClientRepo.find()
  }

  async findOne(id: number): Promise<QueueClient> {
    const qc = await this.queueClientRepo.findOneBy({ id })
    if (!qc) throw new Error(`QueueClient with id ${id} not found`)
    return qc
  }

  async create(data: CreateQueueClientDto): Promise<QueueClient> {
    const newQC = this.queueClientRepo.create(data)
    return this.queueClientRepo.save(newQC)
  }

  async update(id: number, data: UpdateQueueClientDto): Promise<QueueClient> {
    await this.queueClientRepo.update(id, data)
    const updated = await this.queueClientRepo.findOneBy({ id })
    if (!updated) throw new Error(`QueueClient with id ${id} not found`)
    return updated
  }

  async remove(id: number): Promise<void> {
    await this.queueClientRepo.delete(id)
  }
}
