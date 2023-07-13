import { Injectable } from '@nestjs/common';
import Adms from './adms';
import { AdmDTO } from './AdmDTO';
//import * as jwt from 'jsonwebtoken';
import auth from 'src/config/auth';
import { sign } from 'jsonwebtoken';

interface IRequest {
  email: string;
  password: string;
}

@Injectable()
export class AdmService {
  async create(a: AdmDTO) {
    const { email } = a;

    const admExists = await Adms.findOne({ email });

    if (admExists) {
      return { error: 'Email já cadastrado.', adm: null };
    }

    const adm = await Adms.create(a);

    return { adm, error: null };
  }

  async getAdmById(i) {
    const id = i;
    const adm = await Adms.findById(id);
    console.log(adm);
  }

  async getAdm(e) {
    const email = e;
    const adm = await Adms.findOne(email);
    return adm;
  }

  async updateAdm(a: AdmDTO) {
    const { email } = a;
    console.log(a.chavePix);
    const admExists = await Adms.findOne({ email });
    //let msg: any;
    if (admExists) {
      admExists.email = a.email;
      admExists.chavePix = a.chavePix;
      admExists.name = a.name;
      await Adms.findOneAndUpdate(admExists._id, {
        email: admExists.email,
        chavePix: admExists.chavePix,
        name: admExists.name,
      });
    }
  }

  async login({ email, password }: IRequest) {
    const admExists = await Adms.findOne({ email });

    if (!admExists) {
      return { error: 'Usuário não encontrado', token: null };
    }

    if (admExists.password !== password) {
      return { error: 'Senha incorreta', token: null };
    }

    const token = sign({}, auth.jwt.secret, {
      expiresIn: auth.jwt.expiresIn,
    });

    const logado = { admExists, token, error: null };
    return logado;
  }
}
