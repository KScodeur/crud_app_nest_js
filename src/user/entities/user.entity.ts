import { IsNotEmpty } from "class-validator";
import { Notifications} from "src/notification/entities/notification.entity";
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

    @OneToMany(() => Notifications, (notification) => notification.user)
    notification: Notifications[]

}
