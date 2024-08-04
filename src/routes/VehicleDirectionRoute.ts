import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleDirectionController from "../controllers/VehicleDirectionController";
import VehicleDirectionRepository from "../repositories/VehicleDirectionRepository";
import VehicleDirectionSchema from "../validator/VehicleDirectionSchema";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware";

const router: Router = Router();
const vehicleDirectionRepository = new VehicleDirectionRepository(
  AppDataSource.getRepository("VehicleDirectionEntity")
);
const vehicleDirectionController = new VehicleDirectionController(
  vehicleDirectionRepository
);

router.post(
  "/",
  validateSchemaMiddleware(VehicleDirectionSchema.createSchema),
  (req, res, next) =>
    vehicleDirectionController.createVehicleDirection(req, res, next)
);
router.get("/", (req, res, next) =>
  vehicleDirectionController.findAllVehicleDirections(req, res, next)
);
router.get("/:id", (req, res, next) =>
  vehicleDirectionController.findVehicleDirectionById(req, res, next)
);
router.put("/:id", (req, res, next) =>
  vehicleDirectionController.updateVehicleDirectionById(req, res, next)
);

router.delete("/:id", (req, res, next) =>
  vehicleDirectionController.deleteVehicleDirectionById(req, res, next)
);

export default router;
