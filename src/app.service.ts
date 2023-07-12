import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getConnection() {
    const uri =
      'mongodb+srv://tatianamayararodrigues:apiwallet@apiwallet.opxrp1k.mongodb.net/?retryWrites=true&w=majority';

    mongoose.connect(uri);
  }
}
