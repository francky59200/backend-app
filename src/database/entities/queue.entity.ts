import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm'

import { Merchant } from './merchant.entity'
import { QueueClient } from './queueClient.entity'

@Entity('queues')
export class Queue {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(() => Merchant)
  @JoinColumn({ name: 'merchantId' })
  merchant: Merchant

  @OneToMany(() => QueueClient, (client) => client.queue)
  clients: QueueClient[]

  @CreateDateColumn()
  createdAt: Date
}
