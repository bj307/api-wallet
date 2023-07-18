import { Controller, Headers, Body, Put } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Put('deposit')
  async deposit(@Headers('Authorization') h, @Body() b) {
    const { user, saldo } = b;
    const token = h;
    const deposit = await this.transactionsService.deposit(user, token, saldo);
    return deposit;
  }

  @Put('debit')
  async debit(@Headers('Authorization') h, @Body() b) {
    const { user, saldo } = b;
    const token = h;
    const deposit = await this.transactionsService.debit(user, token, saldo);
    return deposit;
  }
}
