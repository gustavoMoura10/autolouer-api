"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("../controllers/UserController"));
var UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
var DataSource_1 = __importDefault(require("../database/DataSource"));
var router = (0, express_1.Router)();
var userRepository = new UserRepository_1.default(DataSource_1.default.getRepository("UserEntity"));
var userController = new UserController_1.default(userRepository);
router.post("/signup", function (req, res, next) {
    return userController.createUser(req, res, next);
});
router.get("/", function (req, res, next) {
    return userController.findAllUsers(req, res, next);
});
router.put("/:id", function (req, res, next) {
    return userController.updateUser(req, res, next);
});
router.get("/:id", function (req, res, next) {
    return userController.findUserById(req, res, next);
});
router.delete("/:id", function (req, res, next) {
    return userController.deleteUser(req, res, next);
});
exports.default = router;
//# sourceMappingURL=UserRoute.js.map