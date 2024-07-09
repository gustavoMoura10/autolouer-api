import { Router } from "express";
import AppDataSource from "../database/DataSource";
import CountryController from "../controllers/CountryController";
import CountryRepository from "../repositories/CountryRepository";

const router: Router = Router();
const countryRepository = new CountryRepository(
  AppDataSource.getRepository("CountryEntity")
);
const countryController = new CountryController(countryRepository);


router.get("/", (req, res, next) =>
  countryController.findAllCountries(req, res, next)
);

router.post("/", (req, res, next) =>
  countryController.createCountry(req, res, next)
);
router.get("/:id", (req, res, next) =>
  countryController.findCountryById(req, res, next)
);
router.put("/:id", (req, res, next) =>
  countryController.updateCountryById(req, res, next)
);

router.delete("/:id", (req, res, next) =>
  countryController.deleteCountryById(req, res, next)
);

export default router;
