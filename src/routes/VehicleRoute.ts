import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleController from "../controllers/VehicleController";
import VehicleRepository from "../repositories/VehicleRepository";
import VehicleCategoryRepository from "../repositories/VehicleCategoryRepository";
import VehicleColorRepository from "../repositories/VehicleColorRepository";
import VehicleDirectionRepository from "../repositories/VehicleDirectionRepository";
import VehicleFuelRepository from "../repositories/VehicleFuelRepository";
import VehicleModelRepository from "../repositories/VehicleModelRepository";
import VehicleTransmissionRepository from "../repositories/VehicleTransmissionRepository";
import VehiclePhotoRepository from "../repositories/VehiclePhotoRepository";

const router: Router = Router();
const vehicleRepository = new VehicleRepository(
  AppDataSource.getRepository("VehicleEntity")
);
const vehicleCategoryRepository = new VehicleCategoryRepository(
  AppDataSource.getRepository("VehicleCategoryEntity")
);
const vehicleColorRepository = new VehicleColorRepository(
  AppDataSource.getRepository("VehicleColorEntity")
);
const vehicleDirectionRepository = new VehicleDirectionRepository(
  AppDataSource.getRepository("VehicleDirectionEntity")
);
const vehicleFuelRepository = new VehicleFuelRepository(
  AppDataSource.getRepository("VehicleFuelEntity")
);
const vehicleModelRepository = new VehicleModelRepository(
  AppDataSource.getRepository("VehicleModelEntity")
);
const vehicleTransmissionRepository = new VehicleTransmissionRepository(
  AppDataSource.getRepository("VehicleTransmissionEntity")
);
const vehiclePhotoRepository = new VehiclePhotoRepository(
  AppDataSource.getRepository("VehiclePhotoEntity")
);
const vehicleController = new VehicleController(
  vehicleRepository,
  vehicleCategoryRepository,
  vehicleColorRepository,
  vehicleDirectionRepository,
  vehicleFuelRepository,
  vehicleModelRepository,
  vehicleTransmissionRepository,
  vehiclePhotoRepository
);

router.post("/", (req, res, next) =>
  vehicleController.createVehicle(req, res, next)
);
router.get("/", (req, res, next) =>
  vehicleController.findAllVehicles(req, res, next)
);
router.get("/:id", (req, res, next) =>
  vehicleController.findVehicleById(req, res, next)
);
router.put("/:id", (req, res, next) =>
  vehicleController.updateVehicleById(req, res, next)
);

router.delete("/:id", (req, res, next) =>
  vehicleController.deleteVehicleById(req, res, next)
);

export default router;
