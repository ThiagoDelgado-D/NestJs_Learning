import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Request } from 'express';
import { Role } from './enums/role.enums';
import { Auth } from './decorators/auth.decorator';

interface RequestWithUser extends Request {
  user: {
    email: string;
    role: string;
  };
}
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body()
    registerDto: RegisterDto,
  ) {
    return await this.authService.register(registerDto);
  }

  @Post('sign-up')
  async signUp(
    @Body()
    loginDto: LoginDto,
  ) {
    return await this.authService.signUp(loginDto);
  }

  @Get('profile')
  @Auth(Role.USER)
  async profile(@Req() req: RequestWithUser) {
    return this.authService.profile(req.user);
  }
}
