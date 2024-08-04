import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleExchangeController from "../controllers/VehicleExchangeController";
import VehicleExchangeRepository from "../repositories/VehicleExchangeRepository";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware";
import VehicleExchangeSchema from "../validator/VehicleExchangeSchema";

const router: Router = Router();
const vehicleExchangeRepository = new VehicleExchangeRepository(
  AppDataSource.getRepository("VehicleExchangeEntity")
);
const vehicleExchangeController = new VehicleExchangeController(
  vehicleExchangeRepository
);

router.post(
  "/",
  validateSchemaMiddleware(VehicleExchangeSchema.createSchema),
  (req, res, next) =>
    vehicleExchangeController.createVehicleExchange(req, res, next)
);
router.get("/", (req, res, next) =>
  vehicleExchangeController.findAllVehicleExchanges(req, res, next)
);
router.get("/:id", (req, res, next) =>
  vehicleExchangeController.findVehicleExchangeById(req, res, next)
);
router.put("/:id", (req, res, next) =>
  vehicleExchangeController.updateVehicleExchangeById(req, res, next)
);

router.delete("/:id", (req, res, next) =>
  vehicleExchangeController.deleteVehicleExchangeById(req, res, next)
);

export default router;
