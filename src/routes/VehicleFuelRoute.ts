import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleFuelController from "../controllers/VehicleFuelController";
import VehicleFuelRepository from "../repositories/VehicleFuelRepository";

const router: Router = Router();
const countryRepository = new VehicleFuelRepository(
  AppDataSource.getRepository("VehicleFuelEntity")
);
const addressController = new VehicleFuelController(
  countryRepository
);

router.post("/:id", (req, res, next) =>
  addressController.createVehicleFuel(req, res, next)
);

export default router;
