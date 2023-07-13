import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Response,
  Put,
} from '@nestjs/common';
import { AdmDTO } from './AdmDTO';
import { AdmService } from './adm.service';

@Controller('adm')
export class AdmController {
  constructor(private admService: AdmService) {}

  @Post('novo')
  async createAdm(@Body() a: AdmDTO, @Response() res) {
    const adm = await this.admService.create(a);
    if (adm.error) {
      return res.status(401).json({ error: adm.error });
    }
    return res.json(adm);
  }

  @Get()
  async getAdm(@Query() a) {
    const adm = await this.admService.getAdm(a);
    return adm;
  }

  @Put()
  async updateAdm(@Body() a: AdmDTO) {
    //const token = h;
    const adm = await this.admService.updateAdm(a);
    return adm;
  }

  @Post('login')
  async login(@Body() a: AdmDTO, @Response() res) {
    const email = a.email;
    const password = a.password;
    const logar = await this.admService.login({ email, password });

    if (logar.error) {
      return res.status(401).json({ error: logar.error });
    }

    return res.json(logar);
  }

  @Get()
  async getAdmId(@Query() a) {
    const adm = await this.admService.getAdmById(a);
    return adm;
  }
}
