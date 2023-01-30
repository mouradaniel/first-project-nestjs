import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaAuthRepository } from './prisma-auth-repository';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private prismaAuthRepository: PrismaAuthRepository) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const player = await this.prismaAuthRepository.validateUser(
      username,
      password,
    );

    if (!player) {
      throw new UnauthorizedException();
    }

    return player;
  }
}
