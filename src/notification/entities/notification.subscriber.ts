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

    @OnEvent('user.created')
    handleUserCreatedEvent(payload: User){
        this.notificationService.create(
            `Nouvel utilisateur créé : ${payload.firstname}`
        )
    }

    @OnEvent('user.updated')
    handleUserUpdatedEvent(user: User){
        this.notificationService.create(
            `Utilisateur mise à jour : ${user.firstname}`
        )
    }

    @OnEvent('user.deleted')
    handleUserDeleteEvent(user: User){
        console.log(user.firstname)
        this.notificationService.create(
            `Utilisateur supprimé : ${user.firstname}`
        )
    }



    


}