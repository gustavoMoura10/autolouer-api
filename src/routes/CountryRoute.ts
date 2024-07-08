import { Router } from "express";
import AppDataSource from "../database/DataSource";
import CountryController from "../controllers/CountryController";
import CountryRepository from "../repositories/CountryRepository";

const router: Router = Router();
const countryRepository = new CountryRepository(
  AppDataSource.getRepository("CountryEntity")
);
const addressController = new CountryController(
  countryRepository
);

router.post("/:id", (req, res, next) =>
  addressController.createCountry(req, res, next)
);

export default router;
