import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleFuelController from "../controllers/VehicleFuelController";
import VehicleFuelRepository from "../repositories/VehicleFuelRepository";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware";
import VehicleFuelSchema from "../validator/VehicleFuelSchema";

const router: Router = Router();
const vehicleFuelRepository = new VehicleFuelRepository(
  AppDataSource.getRepository("VehicleFuelEntity")
);
const vehicleFuelController = new VehicleFuelController(vehicleFuelRepository);

router.post(
  "/",
  validateSchemaMiddleware(VehicleFuelSchema.createSchema),
  (req, res, next) => vehicleFuelController.createVehicleFuel(req, res, next)
);
router.get("/", (req, res, next) =>
  vehicleFuelController.findAllVehicleFuels(req, res, next)
);
router.get("/:id", (req, res, next) =>
  vehicleFuelController.findVehicleFuelById(req, res, next)
);
router.put("/:id", (req, res, next) =>
  vehicleFuelController.updateVehicleFuelById(req, res, next)
);

router.delete("/:id", (req, res, next) =>
  vehicleFuelController.deleteVehicleFuelById(req, res, next)
);

export default router;
