import { Body, Controller, Post, Response } from '@nestjs/common';
import { UserDTO } from 'src/users/UserDTO';
import { SessionsService } from './sessions.service';

@Controller('sessions')
export class SessionsController {
  constructor(private sessionsService: SessionsService) {}

  @Post()
  async login(@Body() u: UserDTO, @Response() res) {
    const email = u.email;
    const password = u.password;
    const logar = await this.sessionsService.execute({ email, password });
    return res.json(logar.token);
  }
}
