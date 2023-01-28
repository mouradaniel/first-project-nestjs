export abstract class PlayersRepository {
  abstract create(username: string, email: string): Promise<void>;
}
