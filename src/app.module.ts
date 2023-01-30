import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [ConfigModule.forRoot(), PlayersModule, AuthModule],
})
export class AppModule {}
