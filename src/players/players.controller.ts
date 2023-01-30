import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePlayerDTO } from './dtos/create-player';
import { UpdatePlayerDto } from './dtos/update-player';
import { PlayersRepository } from './repositories/players-repository';

@Controller('players')
export class PlayersController {
  constructor(private playersRepository: PlayersRepository) {}

  @Post()
  async create(@Body() body: CreatePlayerDTO) {
    const { username, email, password } = body;

    await this.playersRepository.create(username, email, password);
  }

  @Get()
  async findAll() {
    return await this.playersRepository.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.playersRepository.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ) {
    return await this.playersRepository.update(id, updatePlayerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.playersRepository.remove(id);
  }
}
