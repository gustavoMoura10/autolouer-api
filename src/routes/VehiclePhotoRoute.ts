import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehiclePhotoController from "../controllers/VehiclePhotoController";
import VehiclePhotoRepository from "../repositories/VehiclePhotoRepository";

const router: Router = Router();
const countryRepository = new VehiclePhotoRepository(
  AppDataSource.getRepository("VehiclePhotoEntity")
);
const addressController = new VehiclePhotoController(
  countryRepository
);

router.post("/:id", (req, res, next) =>
  addressController.createVehiclePhoto(req, res, next)
);

export default router;
