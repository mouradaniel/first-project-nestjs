import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { PrismaAuthRepository } from './repositories/prisma/prisma-auth-repository';

@Controller()
export class AuthController {
  constructor(private prismaAuthRepository: PrismaAuthRepository) {}

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async login(@Request() req) {
    return this.prismaAuthRepository.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req): any {
    const { username, email } = req.user.username;
    return { username, email };
  }
}
