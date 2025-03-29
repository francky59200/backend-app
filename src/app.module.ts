import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';
import { MissionModule } from './modules/missions/missions.module';

dotenv.config();

@Module({
  imports: [DatabaseModule, UsersModule, MissionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
