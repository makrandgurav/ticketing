import { NextFunction } from "express";
import { UserModel } from "../models/users.model";
import * as bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
const secret = 'makrandandsiddhi';

export const isAuthenticated = async (req: any, res: any, next: any) => {
  console.log("Checking if user is Authenticated");
  try {
    if (!req || !req.body.username || !req.body.userpwd) {
      console.log("Bad request");

      return res.status(400).render("login");
    }
    const { username, userpwd, fullname } = req.body;
    const hash: any = await UserModel.findOne({
      username,
    }).select("password -_id");
    console.log(userpwd, "||", hash.password);
    const findUser = await bcrypt.compare(userpwd, hash.password);

    if (!findUser) {
      console.log("Unauthenticated");
      return res.status(401).render("login");
    }
    const jwtToken = await generateToken({username, fullname}, secret);

    if (!jwtToken) {
      return res.status(401).render("login");
    }

    req.user = req.body;
    console.log(jwtToken, ':---jwtToken---');
    res.cookie('token', jwtToken, { httpOnly: true });
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).render("login");
  }
};

export const generateToken = async (payload: Payload, jwtSecret :string ) => {
  try {
    const jwtOptions: any = {
      expiresIn: '7d',
      algorithm: 'HS384'
    }
    return await jwt.sign(payload, jwtSecret, jwtOptions)
  } catch (error) {
    throw error;
  }
  
}

interface Payload {
  username: string,
  fullname: string
}