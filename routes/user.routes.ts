import express from "express";
import {
  userLogin,
  userSignUp,
  userRegisterPage,
  fetchDashboard,
  logout,
} from "../controller/user.controller";
import { isAuthenticated, validateToken } from "../middlewares/isAuthenticated";
export const userRouter = express.Router();

userRouter.post("/login", isAuthenticated, userLogin);
userRouter.get("/dashboard", validateToken, fetchDashboard);
userRouter.post("/sign-up", userSignUp);
userRouter.get("/register", userRegisterPage);
userRouter.get("/logout", logout);
