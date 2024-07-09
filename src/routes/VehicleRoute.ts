import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleController from "../controllers/VehicleController";
import VehicleRepository from "../repositories/VehicleRepository";

const router: Router = Router();
const vehicleRepository = new VehicleRepository(
  AppDataSource.getRepository("VehicleEntity")
);
const vehicleController = new VehicleController(vehicleRepository);

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
