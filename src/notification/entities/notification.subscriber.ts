import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { User } from "src/user/entities/user.entity";
import { DataSource, EntitySubscriberInterface, Repository } from "typeorm";
import { NotificationService } from "../notification.service";

@Injectable()
export class NotificationSubscriber implements EntitySubscriberInterface{
    // constructor(dataSource: DataSource){
    //     // @InjectRepository(User)
    //     dataSource.subscribers.push(this);
    // }
    constructor(private notificationService: NotificationService) {}
    listenTo(){
        return NotificationSubscriber;
    }

    @OnEvent('user.create')
    handleUserCreateEvent(payload: User){
        console.log('user create:', payload.firstname)
        this.notificationService.create(
            `Nouvel utilisateur créé : ${payload.firstname}`,
            payload,
        )
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