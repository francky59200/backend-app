import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../../database/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Register entity
  controllers: [],
  providers: [],
})
export class ProductModule {}
