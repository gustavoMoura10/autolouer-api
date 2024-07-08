import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleColorController from "../controllers/VehicleColorController";
import VehicleColorRepository from "../repositories/VehicleColorRepository";

const router: Router = Router();
const countryRepository = new VehicleColorRepository(
  AppDataSource.getRepository("VehicleColorEntity")
);
const addressController = new VehicleColorController(
  countryRepository
);

router.post("/:id", (req, res, next) =>
  addressController.createVehicleColor(req, res, next)
);

export default router;
