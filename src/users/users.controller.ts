import { Controller, Post, Body } from '@nestjs/common';
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
}
