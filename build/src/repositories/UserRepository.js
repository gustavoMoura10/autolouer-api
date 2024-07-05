"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRepository = (function () {
    function UserRepository(repository) {
        this.repository = repository;
    }
    UserRepository.prototype.createUser = function (user) {
        try {
            var result = this.repository.save(user);
            return result;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    };
    UserRepository.prototype.findUserById = function (id) {
        try {
            return this.repository.findOne({
                where: {
                    id: id,
                },
            });
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    };
    UserRepository.prototype.findAllUsers = function () {
        try {
            return this.repository.find({
                where: {
                    deletedAt: null,
                },
            });
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    };
    UserRepository.prototype.findUserByEmail = function (email) {
        try {
            return this.repository.findOne({
                where: {
                    email: email,
                },
            });
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    };
    UserRepository.prototype.updateUserById = function (id, user) {
        try {
            this.repository.update(user, {
                where: {
                    id: id,
                },
            });
            return this.repository.findOne({
                where: { id: id },
            });
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    };
    UserRepository.prototype.deleteUserById = function (id) {
        try {
            this.repository.update({
                deletedAt: new Date(),
            }, {
                where: {
                    id: id,
                },
            });
            return this.repository.findOne({
                where: { id: id },
            });
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    };
    return UserRepository;
}());
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map