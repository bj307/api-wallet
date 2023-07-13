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
      return { error: 'Usuário não encontrado', token: null };
    }

    if (user.password !== password) {
      return { error: 'Senha incorreta', token: null };
    }

    const token = sign({}, auth.jwt.secret, {
      expiresIn: auth.jwt.expiresIn,
    });

    const logado = { user, token, error: null };
    return logado;
  }
}
