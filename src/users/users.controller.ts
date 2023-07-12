import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserDTO } from './UserDTO';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() u: UserDTO) {
    const user = await this.usersService.create(u);
    return user;
  }

  @Get()
  async listUsers() {
    const users = await this.usersService.list();
    return users;
  }

  @Get('user')
  async getUser(@Body() u) {
    const user = await this.usersService.getUser(u);
    return user;
  }
}
