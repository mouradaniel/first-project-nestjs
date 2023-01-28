import { IsNotEmpty, Length } from 'class-validator';

export class CreatePlayer {
  @IsNotEmpty({
    message: 'Username is required',
  })
  @Length(4, 80)
  username: string;

  @IsNotEmpty({
    message: 'Email is required',
  })
  email: string;
}
