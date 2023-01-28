import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { PlayersRepository } from '../players-repository';

@Injectable()
export class PrismaPlayersRepository implements PlayersRepository {
  constructor(private prisma: PrismaService) {}

  async create(username: string, email: string): Promise<void> {
    await this.prisma.players.create({
      data: {
        id: randomUUID(),
        username,
        email,
      },
    });
  }
}
