import { Injectable } from '@nestjs/common';
import { QrCodePix } from 'qrcode-pix';

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

@Injectable()
export class PixService {
  async geraPix(p: IParameter) {
    const { key, name, city, message, value } = p;
    const qrCodePix = QrCodePix({
      version: '01',
      key,
      name,
      city,
      message,
      value,
      countryCode: 'BR',
    });

    return qrCodePix;
  }
}
