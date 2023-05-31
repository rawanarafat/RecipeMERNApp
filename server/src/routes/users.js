import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";
import session from "express-session";


const router = express.Router();

/*router.get("/user", async (req, res) => {
  
  try {
    const response = await UserModel.find({});
    const user = await UserModel.findById(req.body.userID);
      
    res.json(response);

  } catch (err) {
      res.json(err);
  }
});*/


router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (user) {
    return res.json({ message: "User already registered" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();
  

  res.json({ message: "User has been registered" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  const token = jwt.sign({ id: user._id }, "secret");
  
  //req.session.user = user;
 
  res.json({ token, userID: user._id, username });
});





export { router as userRouter };
