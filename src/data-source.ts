// src/data-source.ts

import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Category } from './database/entities/category.entity';
import { Product } from './database/entities/product.entity';


export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'franck',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'IsoStock',
  entities: [Product, Category],
  synchronize: false,
});
