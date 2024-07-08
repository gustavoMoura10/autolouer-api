import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleExchangeController from "../controllers/VehicleExchangeController";
import VehicleExchangeRepository from "../repositories/VehicleExchangeRepository";

const router: Router = Router();
const countryRepository = new VehicleExchangeRepository(
  AppDataSource.getRepository("VehicleExchangeEntity")
);
const addressController = new VehicleExchangeController(
  countryRepository
);

router.post("/:id", (req, res, next) =>
  addressController.createVehicleExchange(req, res, next)
);

export default router;
