import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";
import { hashPassword, comparePassword } from "../utils/password.utils";

export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async registerUser(user: User): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(user.email);

    if (existingUser) {
      throw new Error("Email already in use");
    }

    const hashedPassword = await hashPassword(user.password);
    const newUser = await this.userRepository.createUser({
      ...user,
      password: hashedPassword,
    });

    return newUser;
  }

  async loginUser(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isPasswordMatch = await comparePassword(password, user.password);

    if (!isPasswordMatch) {
      throw new Error("Invalid email or password");
    }

    return user;
  }
  
  async getUserById(userId: string): Promise<User> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}
