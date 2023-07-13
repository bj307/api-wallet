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

@Module({
  imports: [UsersModule],
  controllers: [AppController, SessionsController, TransactionsController, AdmController],
  providers: [AppService, SessionsService, TransactionsService, AdmService],
})
export class AppModule {}
