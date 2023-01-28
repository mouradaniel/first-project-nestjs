import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayer } from './dtos/create-player';
import { PlayersRepository } from './repositories/players-repository';

@Controller('players')
export class AppController {
  constructor(private playersRepository: PlayersRepository) {}

  @Post()
  async create(@Body() body: CreatePlayer) {
    const { username, email } = body;

    await this.playersRepository.create(username, email);
  }
}
