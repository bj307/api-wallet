import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import auth from 'src/config/auth';
import { UserDTO } from 'src/users/UserDTO';
import { UsersService } from 'src/users/users.service';
import Users from 'src/users/users';

@Injectable()
export class TransactionsService {
  async deposit(user: UserDTO, token: string, s: number) {
    let msg: any;
    try {
      const usersService = new UsersService();
      jwt.verify(token, auth.jwt.secret);
      const { email } = user;
      const userExists: UserDTO = await Users.findOne({ email });
      userExists.saldo += s;
      usersService.updateUser(userExists);
    } catch (error) {
      msg = { error: 'Token inválido', token: null };
      return msg;
    }
  }

  async debit(user: UserDTO, token: string, s: number) {
    let msg: any;
    try {
      const usersService = new UsersService();
      jwt.verify(token, auth.jwt.secret);
      const { email } = user;
      const userExists: UserDTO = await Users.findOne({ email });
      userExists.saldo -= s;
      usersService.updateUser(userExists);
    } catch (error) {
      msg = { error: 'Token inválido', token: null };
      return msg;
    }
  }
}
