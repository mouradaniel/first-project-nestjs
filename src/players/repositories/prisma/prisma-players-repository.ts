import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { UpdatePlayerDto } from 'src/players/dtos/update-player';
import { PlayersRepository } from '../players-repository';

@Injectable()
export class PrismaPlayersRepository implements PlayersRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    username: string,
    email: string,
    password: string,
  ): Promise<void> {
    const hash = await bcrypt.hash(password, 10);

    await this.prisma.players.create({
      data: {
        id: randomUUID(),
        username,
        email,
        password: hash,
      },
    });
  }

  async findAll() {
    return await this.prisma.players.findMany();
  }

  async findOne(username: string) {
    return await this.prisma.players.findFirst({
      where: { username },
    });
  }

  async update(id: string, updatePlayerDto: UpdatePlayerDto) {
    return await this.prisma.players.update({
      where: { id },
      data: updatePlayerDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.players.delete({ where: { id } });
  }
}
