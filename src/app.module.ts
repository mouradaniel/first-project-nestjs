import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PlayersRepository } from './repositories/players-repository';
import { PrismaPlayersRepository } from './repositories/prisma/prisma-players-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: PlayersRepository,
      useClass: PrismaPlayersRepository,
    },
  ],
})
export class AppModule {}
