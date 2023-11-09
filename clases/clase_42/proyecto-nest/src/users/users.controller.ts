import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // const createUserDto = req.body
    const result = this.usersService.create(createUserDto);
    return { status: 'success', data: result };
  }

  @Get()
  findAll() {
    const result = this.usersService.findAll();
    return { status: 'success', data: result };
  }

  @Get(':id') //app.get("/:id")
  findOne(@Param('id') userId: string) {
    if (isNaN(parseInt(userId))) {
      throw new HttpException('El id es invalido', HttpStatus.BAD_REQUEST);
    }
    const result = this.usersService.findOne(parseInt(userId));
    return { status: 'success', data: result };
  }

  // @Patch(':id')
  // update(@Param('id') userId: string, @Body() updateUserDto: UpdateUserDto) {
  //   const result = this.usersService.update(+userId, updateUserDto);
  //   return { status: 'success', data: result };
  // }

  @Patch(':id')
  update(@Request() req) {
    console.log('req', req);
    const userId = req.params.id;
    const updateUserDto = req.body;
    const result = this.usersService.update(+userId, updateUserDto);
    return { status: 'success', data: result };
  }

  @Delete(':id')
  remove(@Param('id') userId: string) {
    // const userId = req.params.id
    const result = this.usersService.remove(+userId);
    return { status: 'success', data: result };
  }
}
