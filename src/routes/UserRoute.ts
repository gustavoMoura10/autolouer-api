import { Router } from "express";
import UserController from "../controllers/UserController";
import UserRepository from "../repositories/UserRepository";
import AppDataSource from "../database/DataSource";

const router: Router = Router();
const userRepository = new UserRepository(
  AppDataSource.getRepository("UserEntity")
);
const userController = new UserController(userRepository);

router.post("/signup", (req, res, next) =>
  userController.createUser(req, res, next)
);
router.get("/", (req, res, next) =>
  userController.findAllUsers(req, res, next)
);
router.put("/:id", (req, res, next) =>
  userController.updateUser(req, res, next)
);
router.get("/:id", (req, res, next) =>
  userController.findUserById(req, res, next)
);
router.delete("/:id", (req, res, next) =>
  userController.deleteUser(req, res, next)
);
router.patch("/address/:id", (req, res, next) =>
  userController.updateUserAddress(req, res, next)
);

export default router;
