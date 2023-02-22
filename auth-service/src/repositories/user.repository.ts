import { User } from "../models/user.model";
import { v4 as uuidv4 } from "uuid";

export class UserRepository {
  private readonly users: User[] = [];

  async createUser(user: User): Promise<User> {
    const newUser = { ...user, id: uuidv4() };
    this.users.push(newUser);
    return newUser;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async findById(userId: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === userId);
  }
}
