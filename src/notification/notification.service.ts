import { Injectable } from '@nestjs/common';
import { Injector } from '@nestjs/core/injector/injector';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserSubscriber } from 'src/user/entities/user.suscriber';
import { Repository } from 'typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notifications} from './entities/notification.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notifications)
    private readonly notificationRepository : Repository<Notifications>,
  ){}

  // async create(notification) {
  //   let notif = new Notification()
  //   return await this.notificationRepository.save(notification)
  // }

  async create(message: string){
    let notif = new Notifications();
    notif.heure = new Date().getHours(),
    notif.minute = new Date().getMinutes(),
    notif.message = message,
    notif.user = null;


     return await this.notificationRepository.save(notif);
  }


  findAll() {
    return this.notificationRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }



}
