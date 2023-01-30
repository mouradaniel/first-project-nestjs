import { Players } from '@prisma/client';
import { UpdatePlayerDto } from 'src/players/dtos/update-player';

export abstract class PlayersRepository {
  abstract create(
    username: string,
    email: string,
    password: string,
  ): Promise<void>;
  abstract findAll(): Promise<Players[]>;
  abstract findOne(id: string): Promise<Players>;
  abstract update(
    id: string,
    updatePlayerDto: UpdatePlayerDto,
  ): Promise<Players>;
  abstract remove(id: string): Promise<any>;
}
