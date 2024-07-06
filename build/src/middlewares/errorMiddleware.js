"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorMiddleware;
var joi_1 = __importDefault(require("joi"));
var EntityNotFoundError_1 = __importDefault(require("../errors/EntityNotFoundError"));
function errorMiddleware(err, req, res, next) {
    if (err instanceof joi_1.default.ValidationError) {
        res.status(400).send(err.message);
    }
    if (err instanceof EntityNotFoundError_1.default) {
        res.status(404).send(err.message);
    }
}
//# sourceMappingURL=errorMiddleware.js.map