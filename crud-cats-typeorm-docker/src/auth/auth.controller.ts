import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Role } from '../common/enums/role.enums';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from 'src/common/decorators/active.user.decorator';
import { UserActiveInterface } from 'src/common/interfaces/user.active.interface';

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
  async profile(@ActiveUser() user: UserActiveInterface) {
    return this.authService.profile(user);
  }
}
