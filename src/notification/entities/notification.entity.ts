import { User } from "src/user/entities/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notification extends BaseEntity{
    @PrimaryGeneratedColumn()
    notif_id: number;

    @Column()
    heure: number;

    @Column()
    minute: number;

    @Column()
    message: string;

    @ManyToOne(()=> User, (user) => user.notification)
    user:User
}



