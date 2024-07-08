import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleRentController from "../controllers/VehicleRentController";
import VehicleRentRepository from "../repositories/VehicleRentRepository";

const router: Router = Router();
const countryRepository = new VehicleRentRepository(
  AppDataSource.getRepository("VehicleRentEntity")
);
const addressController = new VehicleRentController(
  countryRepository
);

router.post("/:id", (req, res, next) =>
  addressController.createVehicleRent(req, res, next)
);

export default router;
