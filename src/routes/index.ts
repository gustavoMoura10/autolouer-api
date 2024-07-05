import { Express } from "express";
import UserRoute from "./UserRoute";
const router = (app: Express) => {
  app.use("/user", UserRoute);
};

export default router;
