import { Router } from "express";
import AppDataSource from "../database/DataSource";
import BrandController from "../controllers/BrandController";
import BrandRepository from "../repositories/BrandRepository";

const router: Router = Router();
const countryRepository = new BrandRepository(
  AppDataSource.getRepository("BrandEntity")
);
const addressController = new BrandController(
  countryRepository
);

router.post("/:id", (req, res, next) =>
  addressController.createBrand(req, res, next)
);

export default router;
