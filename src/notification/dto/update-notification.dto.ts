import { PartialType } from '@nestjs/mapped-types';
import { CreateNotificationDto } from './create-notification.dto';
import { User } from 'src/user/entities/user.entity';

export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {
    heure:number
    minute:number
    message:string
    user: User[]
}
