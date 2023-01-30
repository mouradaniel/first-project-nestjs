import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PlayersRepository } from 'src/players/repositories/players-repository';
import { AuthRepository } from '../auth-repositories';

@Injectable()
export class PrismaAuthRepository implements AuthRepository {
  constructor(
    private playersRepository: PlayersRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const player = await this.playersRepository.findOne(username);

    const isMatch = await bcrypt.compare(password, player.password);

    if (player && isMatch) {
      return player;
    }

    return null;
  }

  async login(username: string) {
    const payload = { username };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
