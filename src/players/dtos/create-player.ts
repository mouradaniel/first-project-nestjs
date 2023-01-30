import { IsNotEmpty, IsStrongPassword, Length } from 'class-validator';

export class CreatePlayerDTO {
  @IsNotEmpty({
    message: 'Username is required',
  })
  @Length(4, 80)
  username: string;

  @IsNotEmpty({
    message: 'Email is required',
  })
  email: string;

  @IsNotEmpty({
    message: 'Password is required',
  })
  @IsStrongPassword()
  password: string;
}
