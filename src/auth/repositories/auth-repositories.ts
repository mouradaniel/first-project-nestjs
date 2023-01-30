export abstract class AuthRepository {
  abstract validateUser(username: string, password: string): Promise<any>;
}
