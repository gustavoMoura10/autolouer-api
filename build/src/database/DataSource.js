"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var path = __importStar(require("path"));
var AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.PG_DATABASE_HOST,
    port: Number(process.env.PG_DATABASE_PORT),
    username: process.env.PG_DATABASE_USER,
    password: process.env.PG_DATABASE_PASSWORD,
    database: process.env.PG_DATABASE_DATABASE,
    synchronize: true,
    logging: true,
    entities: [path.join(__dirname, "entities/**/*.{j,t}s")],
    migrations: ["migrations/*.{j,t}s"],
    subscribers: ["subscriber/*.{j,t}s"],
});
exports.default = AppDataSource;
//# sourceMappingURL=DataSource.js.map