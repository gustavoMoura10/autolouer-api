import { Router } from "express";
import AppDataSource from "../database/DataSource";
import PaymentMethodController from "../controllers/PaymentMethodController";
import PaymentMethodRepository from "../repositories/PaymentMethodRepository";

const router: Router = Router();
const paymentMethodRepository = new PaymentMethodRepository(
  AppDataSource.getRepository("PaymentMethodEntity")
);
const paymentMethodController = new PaymentMethodController(paymentMethodRepository);

router.post("/", (req, res, next) =>
  paymentMethodController.createPaymentMethod(req, res, next)
);
router.get("/", (req, res, next) =>
  paymentMethodController.findAllPaymentMethods(req, res, next)
);
router.get("/:id", (req, res, next) =>
  paymentMethodController.findPaymentMethodById(req, res, next)
);
router.put("/:id", (req, res, next) =>
  paymentMethodController.updatePaymentMethodById(req, res, next)
);

router.delete("/:id", (req, res, next) =>
  paymentMethodController.deletePaymentMethodById(req, res, next)
);

export default router;
