import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerDTO } from './create-player';

export class UpdatePlayerDto extends PartialType(CreatePlayerDTO) {}
