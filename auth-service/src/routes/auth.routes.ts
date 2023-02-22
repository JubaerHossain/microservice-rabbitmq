import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

import { AuthService } from "../services/auth.service";

export class AuthRoutes {
  public router: Router;
  private authController: AuthController;

  constructor(private authService: AuthService) {
    this.router = Router();
    this.authController = new AuthController(authService);
    this.routes();
  }

  private routes() {
    this.router.post("/register", this.authController.register);
    this.router.post("/login", this.authController.login);
  }
}
