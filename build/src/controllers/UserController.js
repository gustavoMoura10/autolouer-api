"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserSchema_1 = __importDefault(require("../validator/UserSchema"));
var UserController = (function () {
    function UserController(userRepository) {
        this.userRepository = userRepository;
    }
    UserController.prototype.createUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userSchema, _a, firstName, lastName, email, password, document_1, birthdate, result, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        userSchema = new UserSchema_1.default();
                        return [4, userSchema.create(req.body)];
                    case 1:
                        _b.sent();
                        _a = req.body, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, document_1 = _a.document, birthdate = _a.birthdate;
                        return [4, this.userRepository.createUser({
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                password: password,
                                document: document_1,
                                birthdate: birthdate,
                            })];
                    case 2:
                        result = _b.sent();
                        return [2, res.status(200).send(result)];
                    case 3:
                        error_1 = _b.sent();
                        console.log(error_1);
                        next(error_1);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    UserController.prototype.findUserById = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4, this.userRepository.findUserById(Number(id))];
                    case 1:
                        result = _a.sent();
                        return [2, res.status(200).send(result)];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        next(error_2);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    UserController.prototype.findAllUsers = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.userRepository.findAllUsers()];
                    case 1:
                        result = _a.sent();
                        return [2, res.status(200).send(result)];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        next(error_3);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    UserController.prototype.updateUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, firstName, lastName, email, password, document_2, birthdate, result, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        _a = req.body, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, document_2 = _a.document, birthdate = _a.birthdate;
                        return [4, this.userRepository.updateUserById(Number(id), {
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                password: password,
                                document: document_2,
                                birthdate: birthdate,
                            })];
                    case 1:
                        result = _b.sent();
                        return [2, res.status(200).send(result)];
                    case 2:
                        error_4 = _b.sent();
                        console.log(error_4);
                        next(error_4);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    UserController.prototype.deleteUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4, this.userRepository.deleteUserById(Number(id))];
                    case 1:
                        result = _a.sent();
                        return [2, res.status(200).send(result)];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        next(error_5);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    return UserController;
}());
exports.default = UserController;
//# sourceMappingURL=UserController.js.map