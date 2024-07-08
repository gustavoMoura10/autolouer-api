import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleController from "../controllers/VehicleController";
import VehicleRepository from "../repositories/VehicleRepository";

const router: Router = Router();
const countryRepository = new VehicleRepository(
  AppDataSource.getRepository("VehicleEntity")
);
const addressController = new VehicleController(
  countryRepository
);

router.post("/:id", (req, res, next) =>
  addressController.createVehicle(req, res, next)
);

export default router;
