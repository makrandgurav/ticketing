import express from 'express';
import { userLogin, userSignUp } from '../controller/user.controller';
export const userRouter = express.Router();

userRouter.post('/login', userLogin);
userRouter.post('/sign-up', userSignUp);