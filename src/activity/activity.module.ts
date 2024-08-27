import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { Activity } from './entities/activity.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Activity])],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}
