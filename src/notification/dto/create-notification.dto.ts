import { User } from "src/user/entities/user.entity"

export class CreateNotificationDto {
    heure:number
    minute:number
    message:string
    user: User[]


}
