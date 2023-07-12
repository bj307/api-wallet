import { Injectable } from '@nestjs/common';
import Users from 'src/users/users';
import { sign } from 'jsonwebtoken';
import auth from 'src/config/auth';

interface IRequest {
  email: string;
  password: string;
}

@Injectable()
export class SessionsService {
  async execute({ email, password }: IRequest) {
    const user = await Users.findOne({ email });

    if (!user) {
      console.log('Usuário não encontrado');
      return;
    }

    if (user.password !== password) {
      console.log('Senha incorreta');
      return;
    }

    const token = sign({}, auth.jwt.secret, {
      expiresIn: auth.jwt.expiresIn,
    });

    const logado = { user, token };
    return logado;
  }
}
