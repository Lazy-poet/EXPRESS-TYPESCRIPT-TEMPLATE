import { Router, Response } from "express";
import UserRoutes from "./Users/user.route";

class Routes {
  public readonly router: Router;
  constructor() {
    this.router = Router();
    this.initApplicationRoutes();
  }

  private initApplicationRoutes = () => {
    this.router.get("/", (_, res: Response) => {
      res.send("Welcome to Express Typescript Template");
    });

    this.router.use("/user", UserRoutes.router);
  };
}

export default new Routes().router;
