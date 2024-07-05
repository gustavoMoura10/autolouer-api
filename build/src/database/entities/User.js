"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var typeorm_1 = require("typeorm");
var User = /** @class */ (function () {
    function User(firstName, lastName, email, password, birthdate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.birthdate = birthdate;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "first_name",
        }),
        __metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "first_name",
        }),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "timestamp",
            default: function () { return "CURRENT_TIMESTAMP(6)"; },
            name: "created_at",
        }),
        __metadata("design:type", Date)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "timestamp",
            default: function () { return "CURRENT_TIMESTAMP(6)"; },
            onUpdate: "CURRENT_TIMESTAMP(6)",
            name: "updated_at",
        }),
        __metadata("design:type", Date)
    ], User.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "timestamp",
            default: null,
            name: "deleted_at",
        }),
        __metadata("design:type", Date)
    ], User.prototype, "deletedAt", void 0);
    User = __decorate([
        (0, typeorm_1.Entity)({
            name: "user",
        }),
        __metadata("design:paramtypes", [String, String, String, String, Date])
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map