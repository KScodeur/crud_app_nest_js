import { IsNotEmpty } from "class-validator";
import { Notification } from "src/notification/entities/notification.entity";
import { BaseEntity, Column,CreateDateColumn,UpdateDateColumn,DeleteDateColumn, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    user_id:number;

    @IsNotEmpty()
    @Column()
    firstname: String;

    @IsNotEmpty()
    @Column()
    lastname: String;

    @Column()
    age: number;

    @Column()
    image: String;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;

    @DeleteDateColumn()
    deleteDate: Date;

    @OneToMany(() => Notification, (notification) => notification.user) // note: we will create author property in the Photo class below
    notification: Notification[]

}
