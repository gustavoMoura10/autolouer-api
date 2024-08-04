import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleCategoryController from "../controllers/VehicleCategoryController";
import VehicleCategoryRepository from "../repositories/VehicleCategoryRepository";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware";
import VehicleCategorySchema from "../validator/VehicleCategorySchema";

const router: Router = Router();
const vehicleCategoryRepository = new VehicleCategoryRepository(
  AppDataSource.getRepository("VehicleCategoryEntity")
);
const vehicleCategoryController = new VehicleCategoryController(
  vehicleCategoryRepository
);

router.post(
  "/",
  validateSchemaMiddleware(VehicleCategorySchema.createSchema),
  (req, res, next) =>
    vehicleCategoryController.createVehicleCategory(req, res, next)
);
router.get("/", (req, res, next) =>
  vehicleCategoryController.findAllVehicleCategories(req, res, next)
);
router.get("/:id", (req, res, next) =>
  vehicleCategoryController.findVehicleCategoryById(req, res, next)
);
router.put("/:id", (req, res, next) =>
  vehicleCategoryController.updateVehicleCategoryById(req, res, next)
);

router.delete("/:id", (req, res, next) =>
  vehicleCategoryController.deleteVehicleCategoryById(req, res, next)
);

export default router;
