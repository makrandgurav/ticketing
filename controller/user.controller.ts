import { TrainModel } from "../models/trains.model";
import { validateUser } from "../services/user.service";

export const userLogin = async (req: any, res: any) => {
  try {
    if (!req || !req.body.username || !req.body.userpwd) {
      return res.status(400).render("login");
    }

    
    return res.status(200).cookie('username', req.body.username).redirect('/api/v1/user/dashboard');
    // nginx configuration
    // return res.status(200).cookie('username', req.body.username).redirect('/dashboard');
  } catch (error) {
    console.log(error);
  }
};

export const fetchDashboard = async (req: any, res: any) => {
  const availableTrains = await TrainModel.find({
    availableSeats: { $gt: 0}
  });
  res.status(200).render("dashboard", { user: req.cookies.username, availableTrains });
}

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

export const logout = (req: any, res: any) => {
  try {
    res.clearCookie('token');
    res.clearCookie('username');
    return res.status(200).redirect('/')
  } catch (error) {
    console.log(error);
  }
}