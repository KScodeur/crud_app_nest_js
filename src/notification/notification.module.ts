import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Notifications} from './entities/notification.entity';
import { UserSubscriber } from 'src/user/entities/user.suscriber';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { NotificationSubscriber } from './entities/notification.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Notifications])],
  controllers: [NotificationController],
  providers: [NotificationService, NotificationSubscriber]
})
export class NotificationModule {}
