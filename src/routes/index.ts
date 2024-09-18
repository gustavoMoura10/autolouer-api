import { Express } from "express";
import UserRoute from "./UserRoute";
import AddressRoute from "./AddressRoute";
import CountryRoute from "./CountryRoute";
import BrandRoute from "./BrandRoute";
import PaymentMethodRoute from "./PaymentMethodRoute";
import VehicleCategoryRoute from "./VehicleCategoryRoute";
import VehicleColorRoute from "./VehicleColorRoute";
import VehicleDirectionRoute from "./VehicleDirectionRoute";
import VehicleTransmissionRoute from "./VehicleTransmissionRoute";
import VehicleFuelRoute from "./VehicleFuelRoute";
import VehicleModelRoute from "./VehicleModelRoute";
import VehiclePhotoRoute from "./VehiclePhotoRoute";
import VehicleRentRoute from "./VehicleRentRoute";
import VehicleRoute from "./VehicleRoute";
import VehicleTypeRoute from "./VehicleTypeRoute";



const router = (app: Express) => {
  app.use("/user", UserRoute);
  app.use("/address", AddressRoute);
  app.use("/country", CountryRoute);
  app.use("/brand", BrandRoute);
  app.use("/paymentMethod", PaymentMethodRoute);
  app.use("/vehicleCategory", VehicleCategoryRoute);
  app.use("/vehicleColor", VehicleColorRoute);
  app.use("/vehicleDirection", VehicleDirectionRoute);
  app.use("/vehicleTransmission", VehicleTransmissionRoute);
  app.use("/vehicleFuel", VehicleFuelRoute);
  app.use("/vehicleModel", VehicleModelRoute);
  app.use("/vehiclePhoto", VehiclePhotoRoute);
  app.use("/vehicleRent", VehicleRentRoute);
  app.use("/vehicle", VehicleRoute);
  app.use("/vehicleType", VehicleTypeRoute);

};

export default router;
