import { Router } from "express";
import AppDataSource from "../database/DataSource";
import VehicleRentController from "../controllers/VehicleRentController";
import VehicleRentRepository from "../repositories/VehicleRentRepository";

const router: Router = Router();
const vehicleRentRepository = new VehicleRentRepository(
  AppDataSource.getRepository("VehicleRentEntity")
);
const vehicleRentController = new VehicleRentController(vehicleRentRepository);

router.post("/", (req, res, next) =>
  vehicleRentController.createVehicleRent(req, res, next)
);
router.get("/", (req, res, next) =>
  vehicleRentController.findAllVehicleRents(req, res, next)
);
router.get("/:id", (req, res, next) =>
  vehicleRentController.findVehicleRentById(req, res, next)
);
router.put("/:id", (req, res, next) =>
  vehicleRentController.updateVehicleRentById(req, res, next)
);

router.delete("/:id", (req, res, next) =>
  vehicleRentController.deleteVehicleRentById(req, res, next)
);

export default router;
