import { TrainModel } from "../models/trains.models";
import { validateUser } from "../services/user.service";

export const userLogin = async (req: any, res: any) => {
  try {
    if (!req || !req.body.username || !req.body.userpwd) {
      return res.status(400).render("login");
    }

    const availableTrains = await TrainModel.find({
      availableSeats: { $gt: 0}
    });
    return res.status(200).render("dashboard", { user: req.body.username, availableTrains });
  } catch (error) {
    console.log(error);
  }
};

export const userSignUp = async (req: any, res: any) => {
  try {
    if (!req || !req.body.username || !req.body.userpwd) {
      return res.status(400).render("register");
    }

    await validateUser(req.body);
    res.status(200).render("index");
  } catch (error) {
    console.log(error);
    return res.status(400).render("register");
  }
};

export const userRegisterPage = async (req: any, res: any) => {
  try {
    res.render("register");
  } catch (error) {
    console.log(error);
  }
};
