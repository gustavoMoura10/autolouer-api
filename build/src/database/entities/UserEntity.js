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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var AddressEntity_1 = __importDefault(require("./AddressEntity"));
var UserEntity = (function () {
    function UserEntity(firstName, lastName, email, document, birthdate, password, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.document = document;
        this.password = password;
        this.birthdate = birthdate;
        this.address = address;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "first_name",
            length: 100,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "firstName", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "last_name",
            length: 100,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "lastName", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
            unique: true,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
            select: false,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], UserEntity.prototype, "birthdate", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            length: 14,
            nullable: false,
            unique: true,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "document", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return AddressEntity_1.default; }, { eager: true, cascade: true, nullable: true }),
        (0, typeorm_1.JoinColumn)({
            name: "address_id",
            referencedColumnName: "id",
        }),
        __metadata("design:type", AddressEntity_1.default)
    ], UserEntity.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "timestamp",
            default: function () { return "CURRENT_TIMESTAMP(6)"; },
            name: "created_at",
        }),
        __metadata("design:type", Date)
    ], UserEntity.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "timestamp",
            default: function () { return "CURRENT_TIMESTAMP(6)"; },
            onUpdate: "CURRENT_TIMESTAMP(6)",
            name: "updated_at",
        }),
        __metadata("design:type", Date)
    ], UserEntity.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "timestamp",
            default: null,
            name: "deleted_at",
        }),
        __metadata("design:type", Date)
    ], UserEntity.prototype, "deletedAt", void 0);
    UserEntity = __decorate([
        (0, typeorm_1.Entity)("user"),
        __metadata("design:paramtypes", [String, String, String, String, Date, String, AddressEntity_1.default])
    ], UserEntity);
    return UserEntity;
}());
exports.default = UserEntity;
//# sourceMappingURL=UserEntity.js.map