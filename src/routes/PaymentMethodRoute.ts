import { Router } from "express";
import AppDataSource from "../database/DataSource";
import PaymentMethodController from "../controllers/PaymentMethodController";
import PaymentMethodRepository from "../repositories/PaymentMethodRepository";

const router: Router = Router();
const countryRepository = new PaymentMethodRepository(
  AppDataSource.getRepository("PaymentMethodEntity")
);
const addressController = new PaymentMethodController(
  countryRepository
);

router.post("/:id", (req, res, next) =>
  addressController.createPaymentMethod(req, res, next)
);

export default router;
