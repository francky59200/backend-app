// src/database/entities/product.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ unique: true })
  slug: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'text' })
  description: string;

  @Column('simple-array')
  images: string[];

  @ManyToOne(() => Category, (category) => category.products, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
