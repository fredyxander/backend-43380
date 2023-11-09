import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User>;

  constructor() {
    this.users = [];
  }

  create(createUserDto: CreateUserDto) {
    const newUser: User = {
      id: this.users.length + 1,
      first_name: createUserDto.first_name,
      email: createUserDto.email,
      pasword: createUserDto.password,
    };
    this.users.push(newUser);
    return 'El nuevo usuario fue creado';
  }

  findAll() {
    return this.users;
  }

  findOne(userId: number) {
    const user = this.users.find((u) => u.id === userId);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userInfo: User = {
      id: id,
      first_name: updateUserDto.first_name,
      email: updateUserDto.email,
      pasword: updateUserDto.password,
    };
    const userIndex = this.users.findIndex((u) => u.id === id);
    this.users[userIndex] = userInfo;
    return 'usuario actualizado';
  }

  remove(id: number) {
    const newUsers = this.users.filter((u)=>u.id !== id);
    this.users = newUsers;
    return `usuario ${id} eliminado`;
  }
}
