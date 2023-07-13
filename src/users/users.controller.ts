import { Controller, Post, Body, Get, Query, Response } from '@nestjs/common';
import { UserDTO } from './UserDTO';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() u: UserDTO, @Response() res) {
    const user = await this.usersService.create(u);
    if (user.error) {
      return res.status(401).json({ error: user.error });
    }
    return user;
  }

  @Get()
  async listUsers() {
    const users = await this.usersService.list();
    return users;
  }

  @Get('user')
  async getUser(@Query() u) {
    const user = await this.usersService.getUser(u);
    return user;
  }
}
