import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleCategoryController from "../controllers/VehicleCategoryController";
import VehicleCategoryRepository from "../repositories/VehicleCategoryRepository";

const router: Router = Router();
const countryRepository = new VehicleCategoryRepository(
  AppDataSource.getRepository("VehicleCategoryEntity")
);
const addressController = new VehicleCategoryController(
  countryRepository
);

router.post("/:id", (req, res, next) =>
  addressController.createVehicleCategory(req, res, next)
);

export default router;
