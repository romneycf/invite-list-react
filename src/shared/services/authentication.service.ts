import { User } from "../../models/user";

export class AuthenticationService {
  static signIn(email: string, password: string): Promise<User> {
    return Promise.resolve({
      id: "1",
      email: "mauroccvieira@gmail.com",
      name: "Mauro Vieira",
      phone: "+5511999999999",
    });
  }

  static signUp(
    email: string,
    password: string,
    inviteKey: string
  ): Promise<User> {
    throw new Error("Not implemented yet");
  }

  static signOut(): Promise<void> {
    throw new Error("Not implemented yet");
  }
}
