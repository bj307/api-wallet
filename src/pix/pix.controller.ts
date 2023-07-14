import { Controller, Post, Body } from '@nestjs/common';
import { PixService } from './pix.service';

interface IParameter {
  version: string;
  key: string;
  city: string;
  name: string;
  value?: number;
  transactionId?: string;
  message?: string;
  cep?: string;
  currency?: number;
  countryCode?: string;
}

interface IResponse {
  payload: string;
}

@Controller('pix')
export class PixController {
  constructor(private pixService: PixService) {}

  @Post()
  async geraPix(@Body() a: IParameter): Promise<IResponse> {
    const pix = await this.pixService.geraPix(a);

    const response: IResponse = {
      payload: pix.payload(),
    };
    return response;
  }
}
