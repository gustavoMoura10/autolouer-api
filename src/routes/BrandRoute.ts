import { Router } from "express";
import AppDataSource from "../database/DataSource";
import BrandController from "../controllers/BrandController";
import BrandRepository from "../repositories/BrandRepository";
import CountryRepository from "../repositories/CountryRepository";

const router: Router = Router();
const brandRepository = new BrandRepository(
  AppDataSource.getRepository("BrandEntity")
);
const countryRepository = new CountryRepository(
  AppDataSource.getRepository("CountryEntity")
);
const brandController = new BrandController(brandRepository, countryRepository);

router.post("/", (req, res, next) =>
  brandController.createBrand(req, res, next)
);
router.get("/", (req, res, next) =>
  brandController.findAllBrands(req, res, next)
);
router.get("/:id", (req, res, next) =>
  brandController.findBrandById(req, res, next)
);
router.put("/:id", (req, res, next) =>
  brandController.updateBrandById(req, res, next)
);

router.delete("/:id", (req, res, next) =>
  brandController.deleteBrandById(req, res, next)
);

export default router;
