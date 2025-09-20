import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'

import { Queue } from './queue.entity'

@Entity('queue_clients')
export class QueueClient {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Queue, (queue) => queue.clients)
  @JoinColumn({ name: 'queueId' })
  queue: Queue

  @Column({ nullable: true })
  clientName: string

  @Column({ default: 'waiting' })
  status: 'waiting' | 'called' | 'served'

  @CreateDateColumn()
  createdAt: Date
}
