import express from "express";
import {
  userLogin,
  userSignUp,
  userRegisterPage,
} from "../controller/user.controller";
import { isAuthenticated } from "../middlewares/isAuthenticated";
export const userRouter = express.Router();

userRouter.post("/login", isAuthenticated, userLogin);
userRouter.post("/sign-up", userSignUp);
userRouter.get("/register", userRegisterPage);
