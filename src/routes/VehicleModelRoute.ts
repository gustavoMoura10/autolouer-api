import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleModelController from "../controllers/VehicleModelController";
import VehicleModelRepository from "../repositories/VehicleModelRepository";

const router: Router = Router();
const countryRepository = new VehicleModelRepository(
  AppDataSource.getRepository("VehicleModelEntity")
);
const addressController = new VehicleModelController(
  countryRepository
);

router.post("/:id", (req, res, next) =>
  addressController.createVehicleModel(req, res, next)
);

export default router;
