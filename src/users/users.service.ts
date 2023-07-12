import { Injectable } from '@nestjs/common';
import Users from './users';
import { UserDTO } from './UserDTO';

@Injectable()
export class UsersService {
  async create(u: UserDTO) {
    const user = await Users.create(u);

    console.log(user);
  }
}
