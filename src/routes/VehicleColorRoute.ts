import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleColorController from "../controllers/VehicleColorController";
import VehicleColorRepository from "../repositories/VehicleColorRepository";

const router: Router = Router();
const vehicleColorRepository = new VehicleColorRepository(
  AppDataSource.getRepository("VehicleColorEntity")
);
const vehicleColorController = new VehicleColorController(vehicleColorRepository);

router.post("/", (req, res, next) =>
  vehicleColorController.createVehicleColor(req, res, next)
);
router.get("/", (req, res, next) =>
  vehicleColorController.findAllVehicleColors(req, res, next)
);
router.get("/:id", (req, res, next) =>
  vehicleColorController.findVehicleColorById(req, res, next)
);
router.put("/:id", (req, res, next) =>
  vehicleColorController.updateVehicleColorById(req, res, next)
);

router.delete("/:id", (req, res, next) =>
  vehicleColorController.deleteVehicleColorById(req, res, next)
);

export default router;
