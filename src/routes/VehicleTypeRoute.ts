import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleTypeController from "../controllers/VehicleTypeController";
import VehicleTypeRepository from "../repositories/VehicleTypeRepository";

const router: Router = Router();
const countryRepository = new VehicleTypeRepository(
  AppDataSource.getRepository("VehicleTypeEntity")
);
const addressController = new VehicleTypeController(
  countryRepository
);

router.post("/:id", (req, res, next) =>
  addressController.createVehicleType(req, res, next)
);

export default router;
