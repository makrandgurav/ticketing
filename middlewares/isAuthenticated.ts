import { NextFunction } from "express";
import { UserModel } from "../models/users.model";
import * as bcrypt from "bcrypt";
export const isAuthenticated = async (req: any, res: any, next: any) => {
  console.log("Checking if user is Authenticated");
  try {
    if (!req || !req.body.username || !req.body.userpwd) {
      console.log("Bad request");

      return res.status(400).render("login");
    }
    const { username, userpwd } = req.body;
    const hash: any = await UserModel.findOne({
      username,
    }).select("password -_id");
    console.log(userpwd, "||", hash.password);
    const findUser = await bcrypt.compare(userpwd, hash.password);

    if (!findUser) {
      console.log("Unauthenticated");
      return res.status(401).render("login");
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
