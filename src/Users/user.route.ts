import { Router } from "express";
import UserController from "./user.controller";
export default new (class ComputeTransactionFeesRoute {
  public readonly router: Router;
  constructor() {
    this.router = Router();
    this.initRoute();
  }

  private initRoute = () => {
    this.router.post("/signup", UserController.registerUser);
  };
})();
