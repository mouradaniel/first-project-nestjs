import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaAuthRepository } from './repositories/prisma/prisma-auth-repository';
import { LocalStrategy } from './repositories/prisma/local-strategy-auth-repository';
import { AuthController } from './auth.controller';
import { PlayersModule } from 'src/players/players.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './repositories/prisma/jwt-strategy-auth-repository';

@Module({
  imports: [
    PlayersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [PrismaAuthRepository, LocalStrategy, JwtStrategy],
  exports: [PrismaAuthRepository],
  controllers: [AuthController],
})
export class AuthModule {}
