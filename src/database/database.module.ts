import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER || 'franck', // ✅ Ensure username is set
      password: process.env.DB_PASSWORD || 'root', // ✅ Ensure password is set
      database: process.env.DB_NAME || 'innovation', // ✅ Ensure database is set
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  exports: [TypeOrmModule], // Export to make it available for other modules
})
export class DatabaseModule {}
