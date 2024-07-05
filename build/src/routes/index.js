"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserRoute_1 = __importDefault(require("./UserRoute"));
var router = function (app) {
    app.use("/user", UserRoute_1.default);
};
exports.default = router;
//# sourceMappingURL=index.js.map