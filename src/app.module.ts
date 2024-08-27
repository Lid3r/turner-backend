import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { ActivityModule } from './activity/activity.module';
import { User } from './user/entities/user.entity';
import { Board } from './board/entities/board.entity';
import { Activity } from './activity/entities/activity.entity';
import { BoardUser } from './board/entities/board-user.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'turner',
      models: [User, Board, BoardUser, Activity],
    }),
    UserModule,
    BoardModule,
    ActivityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
