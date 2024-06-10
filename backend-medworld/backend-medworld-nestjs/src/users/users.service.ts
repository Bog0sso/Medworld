import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  // TBD : replace in-memory users with database users,
  // We'll assume that as current technical debt.
  private readonly users = [
    {
      userId: 1,
      username: 'bog0sso',
      password: 'bog0sso',
    },
    {
      userId: 2,
      username: 'abdoulaye',
      password: 'abdoulaye',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
