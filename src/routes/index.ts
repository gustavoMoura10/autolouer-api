import { Express } from "express";
import UserRoute from "./UserRoute";
import AddressRoute from "./AddressRoute";

const router = (app: Express) => {
  app.use("/user", UserRoute);
  app.use("/address", AddressRoute);
};

export default router;
