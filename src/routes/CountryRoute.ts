import { Router } from "express";
import UserController from "../controllers/UserController";
import UserRepository from "../repositories/UserRepository";
import AppDataSource from "../database/DataSource";
import AddressRepository from "../repositories/AddressRepository";
import AddressController from "../controllers/AddressController";

const router: Router = Router();
const userRepository = new UserRepository(
  AppDataSource.getRepository("UserEntity")
);
const addressController = new AddressController(
  addressRepository,
  userRepository
);

router.post("/:id", (req, res, next) =>
  addressController.createAddress(req, res, next)
);

export default router;
