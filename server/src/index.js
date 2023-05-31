import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
import getUserNameMiddleware from './middleware/getUserNameMiddleware.js'
import responseHandler from './routes/routeHandler.js';
import authenticateMiddleware from './middleware/authenticateMiddleware.js'
import {protectedRouter} from './routes/protectedRoute.js'

const app = express();




app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);
//app.get("/route", getUserNameMiddleware, responseHandler);
app.use('/protected', protectedRouter);
/*app.get('/route', (req, res, next) => {
  req.user = { name: 'John Doe' }; // Modify req.user to test it as an object
  next();
}, getUserNameMiddleware, responseHandler);*/


mongoose.connect(
  "mongodb+srv://rawanarafat:rrr452000@recipes.czt0ku1.mongodb.net/recipes?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(9001, () => console.log("Server started"));