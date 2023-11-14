import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument, User } from './schemas/users.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
    private config: ConfigService,
  ) {}
  create(createUserDto: CreateUserDto) {
    const createdUser = this.usersModel.create(createUserDto);
    return createdUser;
  }

  findAll() {
    const users = this.usersModel.find();
    return users;
  }

  findOne(id: number) {
    console.log(this.config.get('ADMIN_EMAIL'));
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const userUpdated = this.usersModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    if (!userUpdated) {
      throw new Error('El usuario no existe');
    }
    return userUpdated;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
