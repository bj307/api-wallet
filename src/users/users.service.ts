import { Injectable } from '@nestjs/common';
import Users from './users';
import { UserDTO } from './UserDTO';

@Injectable()
export class UsersService {
  async create(u: UserDTO) {
    const { email } = u;
    u.saldo = 0;

    const userExists = await Users.findOne({ email });

    if (userExists) {
      return { error: 'Email já cadastrado.', user: null };
    }

    const user = await Users.create(u);

    return { user, error: null };
  }

  async list() {
    const users = await Users.find();
    return users;
  }

  async getUser(e) {
    const email = e;
    console.log(email);
    const user = await Users.findOne(email);
    return user;
  }

  async updateUser(u: UserDTO) {
    const { email } = u;
    const userExists = await Users.findOne({ email });
    if (userExists) {
      userExists.saldo = u.saldo;
      await Users.findByIdAndUpdate(userExists.id, { saldo: userExists.saldo });
    }
  }
}
