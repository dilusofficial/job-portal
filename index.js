import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import homeRouter from "./modules/user/routers/homeRouter.js";
import authRouter from "./modules/auth/routers/authRouter.js";
import mongoose from "mongoose";
import cors from "cors";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use("/home", homeRouter);
app.use("/auth", authRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not Found" });
});
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
try {
  await mongoose.connect(process.env.MONGODB_URI);
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
