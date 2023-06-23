import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typerorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { NotificationModule } from './notification/notification.module';
import { Notification } from './notification/entities/notification.entity';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UserService } from './user/user.service';
import { NotificationSubscriber } from './notification/entities/notification.subscriber';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    TypeOrmModule.forFeature([User, Notification]),
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    NotificationModule, 
  ],
  controllers: [AppController],
  providers: [AppService ,UserService],
})
export class AppModule {}
