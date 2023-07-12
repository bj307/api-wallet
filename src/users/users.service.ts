import { Injectable } from '@nestjs/common';
import Users from './users';
import { UserDTO } from './UserDTO';

@Injectable()
export class UsersService {
  async create(u: UserDTO) {
    const { email } = u;

    const userExists = await Users.findOne({ email });

    if (userExists) {
      console.log('Email ja existe');
      return;
    }

    const user = await Users.create(u);

    console.log(user);
  }

  async list() {
    const users = await Users.find();
    return users;
  }

  async getUser(e) {
    const email = e;
    console.log(email);
    const user = await Users.findOne(email);
    console.log(user);

    return user;
  }
}
