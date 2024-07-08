import { Express } from "express";
import UserRoute from "./UserRoute";
import AddressRoute from "./AddressRoute";
import CountryRoute from "./CountryRoute";
import BrandRoute from "./BrandRoute";
import PaymentMethodRoute from "./PaymentMethodRoute";
import VehicleCategoryRoute from "./VehicleCategoryRoute";
import VehicleColorRoute from "./VehicleColorRoute";


const router = (app: Express) => {
  app.use("/user", UserRoute);
  app.use("/address", AddressRoute);
  app.use("/country", CountryRoute);
  app.use("/brand", BrandRoute);
  app.use("/paymentMethod", PaymentMethodRoute);
  app.use("/vehicleCategory", VehicleCategoryRoute);
  app.use("/vehicleColor", VehicleColorRoute);

};

export default router;
