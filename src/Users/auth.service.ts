import { SignupData } from "../types";
import { UserService } from "./user.service";
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async registerUser(data: SignupData) {
    const res = await this.userService.addUser(data);
    return res ? data : false;
  }
}
