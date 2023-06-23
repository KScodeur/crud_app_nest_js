import { Logger } from '@nestjs/common';
import { Notification } from 'src/notification/entities/notification.entity';
import { NotificationService } from 'src/notification/notification.service';
import {
    DataSource,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
    Not,
    UpdateEvent,
  } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from './user.entity';
  
  @EventSubscriber()
  export class UserSubscriber implements EntitySubscriberInterface<User> { 
      constructor(dataSource: DataSource) {
      dataSource.subscribers.push(this);
    }
    date = new Date();


  
    listenTo() {
      return User;
    }
    afterUpdate(event: UpdateEvent<User>): void | Promise<any> {
      const userGotUpdated = event.updatedColumns.find(value => value.propertyName, User.prototype.firstname)
      if(event.databaseEntity.firstname !== event.entity.firstname){
        console.log(event.entity.firstname)
      }
    }
  
    beforeInsert(event: InsertEvent<User>) {
      console.log(`BEFORE USER INSERTED: `, event.entity);
      let  notification={
        notif_id: null,
        minute: this.date.getMinutes(),
        heure: this.date.getHours(),
        user: event.entity,
        message: 'create'
      };
      // return this.notificationService.create(notification);
        // return addNotification;
      }
}