import express from "express";
import homeRouter from "./routers/homeRouter.js";

const app = express();

app.use("/", homeRouter);

const port = process.env.PORT || 3000;
try {
  app.listen(port, () => {
    console.log("successfully connected to server");
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
