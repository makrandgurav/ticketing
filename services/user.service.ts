import { UserModel } from "../models/users.model";
import * as bcrypt from "bcrypt";

export const validateUser = async (user: any) => {
  const findUser = await UserModel.findOne({
    username: user.username,
  }).countDocuments();
  console.log(`USer found: ${findUser}`);

  if (findUser && findUser != 0) {
    throw new Error("User already registered");
  }
  const { username, userpwd, userfullname } = user;
  const salt = await bcrypt.genSalt(10);

  const password = await bcrypt.hash(userpwd, salt);
  await UserModel.create({
    username,
    password,
    fullname: userfullname || username,
    role: "USER",
  });
};
