import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleTransmissionController from "../controllers/VehicleTransmissionController";
import VehicleTransmissionRepository from "../repositories/VehicleTransmissionRepository";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware";
import VehicleTransmissionSchema from "../validator/VehicleTransmissionSchema";

const router: Router = Router();
const vehicleTransmissionRepository = new VehicleTransmissionRepository(
  AppDataSource.getRepository("VehicleTransmissionEntity")
);
const vehicleTransmissionController = new VehicleTransmissionController(
  vehicleTransmissionRepository
);

router.post(
  "/",
  validateSchemaMiddleware(VehicleTransmissionSchema.createSchema),
  (req, res, next) =>
    vehicleTransmissionController.createVehicleTransmission(req, res, next)
);
router.get("/", (req, res, next) =>
  vehicleTransmissionController.findAllVehicleTransmissions(req, res, next)
);
router.get("/:id", (req, res, next) =>
  vehicleTransmissionController.findVehicleTransmissionById(req, res, next)
);
router.put("/:id", (req, res, next) =>
  vehicleTransmissionController.updateVehicleTransmissionById(req, res, next)
);

router.delete("/:id", (req, res, next) =>
  vehicleTransmissionController.deleteVehicleTransmissionById(req, res, next)
);

export default router;
