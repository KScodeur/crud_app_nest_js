import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { User } from "src/user/entities/user.entity";
import { DataSource, EntitySubscriberInterface } from "typeorm";

@Injectable()
export class NotificationSubscriber implements EntitySubscriberInterface{
    constructor(dataSource: DataSource){
        dataSource.subscribers.push(this);
    }
    listenTo(){
        return NotificationSubscriber;
    }

    @OnEvent('user.create')
    handleUserCreateEvent(user: User){
        console.log('user create:', user)
    }

    @OnEvent('user.update')
    handleUserUpdateEvent(user: User){
        console.log('user update:', user)
    }

    @OnEvent('user.delete')
    handleUserDeleteEvent(user: User){
        console.log('user delete:', user)
    }



    


}