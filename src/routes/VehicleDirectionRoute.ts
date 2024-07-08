import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleDirectionController from "../controllers/VehicleDirectionController";
import VehicleDirectionRepository from "../repositories/VehicleDirectionRepository";

const router: Router = Router();
const countryRepository = new VehicleDirectionRepository(
  AppDataSource.getRepository("VehicleDirectionEntity")
);
const addressController = new VehicleDirectionController(
  countryRepository
);

router.post("/:id", (req, res, next) =>
  addressController.createVehicleDirection(req, res, next)
);

export default router;
