import { Request, Response } from "express";
import { UserService } from "./user.service";
import { AuthService } from "./auth.service";
import validateClientData from "../validations/user.validation";
import { ValidationError, catchAsyncError } from "../utils/error";
import response from "../utils/response";
export default new (class UserController {
  constructor(private readonly authService: AuthService) {}
  registerUser = catchAsyncError(async (req: Request, res: Response) => {
    const error = validateClientData(req.body);
    if (error) {
      throw new ValidationError(error);
    }
    const user = await this.authService.registerUser(req.body);
    user
      ? response.setSuccess(res, 200, "success", user)
      : response.setError(res, 400, "an error occured");
  });
})(new AuthService(new UserService()));
