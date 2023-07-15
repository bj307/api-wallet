import { Controller, Post, Headers, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Post('deposit')
  async deposit(@Headers('Authorization') h, @Body() b) {
    const { user, saldo } = b;
    const token = h;
    const deposit = await this.transactionsService.deposit(user, token, saldo);
    return deposit;
  }

  @Post('debit')
  async debit(@Headers('Authorization') h, @Body() b) {
    const { user, saldo } = b;
    const token = h;
    const deposit = await this.transactionsService.debit(user, token, saldo);
    return deposit;
  }
}
