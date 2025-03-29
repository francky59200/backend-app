import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mission } from '../../database/entities/mission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mission])], // Register entity
  controllers: [],
  providers: [],
})
export class MissionModule {}
