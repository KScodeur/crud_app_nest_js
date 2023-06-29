import { Injectable } from '@nestjs/common';
import { Injector } from '@nestjs/core/injector/injector';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserSubscriber } from 'src/user/entities/user.suscriber';
import { Repository } from 'typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './entities/notification.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository : Repository<Notification>,
  ){}

  // async create(notification) {
  //   let notif = new Notification()
  //   return await this.notificationRepository.save(notification)
  // }

  async create(message: string, user: User): Promise<Notification>{

    const notification = {
      heure: new Date().getHours(),
      minute: new Date().getMinutes(),
      message,
      user,
    };

    return this.notificationRepository.save(notification);
  }


  findAll() {
    return this.notificationRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  async update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return await this.notificationRepository.update(id, updateNotificationDto);
  }

}
