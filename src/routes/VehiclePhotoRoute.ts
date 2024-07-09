import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehiclePhotoController from "../controllers/VehiclePhotoController";
import VehiclePhotoRepository from "../repositories/VehiclePhotoRepository";

const router: Router = Router();
const vehicleModelRepository = new VehiclePhotoRepository(
  AppDataSource.getRepository("VehiclePhotoEntity")
);
const vehicleModelController = new VehiclePhotoController(vehicleModelRepository);

router.post("/", (req, res, next) =>
  vehicleModelController.createVehiclePhoto(req, res, next)
);
router.get("/", (req, res, next) =>
  vehicleModelController.findAllVehiclePhotos(req, res, next)
);
router.get("/:id", (req, res, next) =>
  vehicleModelController.findVehiclePhotoById(req, res, next)
);
router.put("/:id", (req, res, next) =>
  vehicleModelController.updateVehiclePhotoById(req, res, next)
);

router.delete("/:id", (req, res, next) =>
  vehicleModelController.deleteVehiclePhotoById(req, res, next)
);

export default router;
