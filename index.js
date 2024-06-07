import express from "express";
import homeRouter from "./modules/user/routers/homeRouter.js";
import authRouter from "./modules/auth/routers/authRouter.js";

const app = express();

app.use(express.static("public"));

app.use("/", homeRouter);
app.use("/auth", authRouter);

const port = process.env.PORT || 3000;
try {
  app.listen(port, () => {
    console.log("successfully connected to server");
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
