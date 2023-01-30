import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PlayersController } from './players.controller';
import { PlayersRepository } from './repositories/players-repository';
import { PrismaPlayersRepository } from './repositories/prisma/prisma-players-repository';

@Module({
  controllers: [PlayersController],
  providers: [
    PrismaService,
    {
      provide: PlayersRepository,
      useClass: PrismaPlayersRepository,
    },
  ],
  exports: [PlayersRepository],
})
export class PlayersModule {}
