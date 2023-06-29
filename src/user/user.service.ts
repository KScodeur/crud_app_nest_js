import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { nextTick } from 'process';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository : Repository<User>,
    private readonly eventEmitter: EventEmitter2

  ){}
  async create(createUserDto: CreateUserDto): Promise<User> {
    try{
      let user = new User();
      user.firstname = createUserDto.firstname,
      user.lastname = createUserDto.lastname,
      user.age = createUserDto.age,
      user.image = createUserDto.image

      this.eventEmitter.emit('user.create', user)
    return await this.userRepository.save(user)
    }catch(e){
      console.log(e)
      throw new InternalServerErrorException("Failed to create")
    }
  }

  async findAll():Promise<User[]> {
    try{
      return await this.userRepository.find();
    }catch(e){
      throw new InternalServerErrorException("Can't find all");
    }
  }

  async findOne(id: number) {
    try{
      return await this.userRepository.findOneBy({user_id:id})
    }catch(e){
      throw new InternalServerErrorException("Can't find one");

    }
  }

  async update(id: number, updateUserDto: UpdateUserDto):Promise<User> {
    try{
      let user = new User()
    user.firstname = updateUserDto.firstname,
    user.lastname = updateUserDto.lastname,
    user.age = updateUserDto.age,
    user.image = updateUserDto.image
    this.eventEmitter.emit('user.update', User)

    return await this.userRepository.save(user)
    }catch(e){
      console.log(e)
      throw new InternalServerErrorException("Failed to update")
    }
  }

  async delete(id: number) {
    try{
      this.eventEmitter.emit('user.delete', User)
      return this.userRepository.delete(id);
    }catch(e){
      throw new InternalServerErrorException("Failed ti delete")
    }
  }
}
