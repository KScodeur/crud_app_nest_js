import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions ={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'kscodeur',
    password: 'codeur',
    database: 'crud',
    autoLoadEntities: true,
    synchronize: true,
}