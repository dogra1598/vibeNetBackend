import User from "../models/user.js";

export const signup = (req, res) => {
  console.log(req.body);
  res.send("signup");
};

export const login = (req, res) => {
  res.send("login");
};
