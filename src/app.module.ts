import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SessionsController } from './sessions/sessions.controller';
import { SessionsService } from './sessions/sessions.service';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionsController } from './transactions/transactions.controller';
import { AdmController } from './adm/adm.controller';
import { AdmService } from './adm/adm.service';
import { PixService } from './pix/pix.service';
import { PixController } from './pix/pix.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, SessionsController, TransactionsController, AdmController, PixController],
  providers: [AppService, SessionsService, TransactionsService, AdmService, PixService],
})
export class AppModule {}
