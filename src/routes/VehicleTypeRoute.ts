import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleTypeController from "../controllers/VehicleTypeController";
import VehicleTypeRepository from "../repositories/VehicleTypeRepository";
import CountryRepository from "../repositories/CountryRepository";
import VehicleTypeSchema from "../validator/VehicleTypeSchema";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware";

const router: Router = Router();
const vehicleTypeRepository = new VehicleTypeRepository(
  AppDataSource.getRepository("VehicleTypeEntity")
);
const countryRepository = new CountryRepository(
  AppDataSource.getRepository("CountryEntity")
);
const vehicleTypeController = new VehicleTypeController(
  vehicleTypeRepository,
  countryRepository
);

router.post(
  "/",
  validateSchemaMiddleware(VehicleTypeSchema.createSchema),
  (req, res, next) => vehicleTypeController.createVehicleType(req, res, next)
);
router.get("/", (req, res, next) =>
  vehicleTypeController.findAllVehicleTypes(req, res, next)
);
router.get("/:id", (req, res, next) =>
  vehicleTypeController.findVehicleTypeById(req, res, next)
);
router.put("/:id", (req, res, next) =>
  vehicleTypeController.updateVehicleTypeById(req, res, next)
);

router.delete("/:id", (req, res, next) =>
  vehicleTypeController.deleteVehicleTypeById(req, res, next)
);

export default router;
