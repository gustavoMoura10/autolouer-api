import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleModelController from "../controllers/VehicleModelController";
import VehicleModelRepository from "../repositories/VehicleModelRepository";

const router: Router = Router();
const vehicleModelRepository = new VehicleModelRepository(
  AppDataSource.getRepository("VehicleModelEntity")
);
const vehicleModelController = new VehicleModelController(vehicleModelRepository);

router.post("/", (req, res, next) =>
  vehicleModelController.createVehicleModel(req, res, next)
);
router.get("/", (req, res, next) =>
  vehicleModelController.findAllVehicleModels(req, res, next)
);
router.get("/:id", (req, res, next) =>
  vehicleModelController.findVehicleModelById(req, res, next)
);
router.put("/:id", (req, res, next) =>
  vehicleModelController.updateVehicleModelById(req, res, next)
);

router.delete("/:id", (req, res, next) =>
  vehicleModelController.deleteVehicleModelById(req, res, next)
);

export default router;
