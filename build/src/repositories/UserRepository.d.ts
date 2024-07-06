import { Repository } from "typeorm";
import InterfaceUserRepository from "./interfaces/InterfaceUserRepository";
import UserEntity from "../database/entities/UserEntity";
import User from "../types/User";
export default class UserRepository implements InterfaceUserRepository {
    private repository;
    constructor(repository: Repository<UserEntity>);
    createUser(user: User): Promise<UserEntity | null>;
    findUserById(id: number): Promise<UserEntity | null>;
    findAllUsers(): Promise<UserEntity[]>;
    findUserByEmail(email: string): Promise<UserEntity | null>;
    updateUserById(id: number, user: User): Promise<UserEntity | null>;
    deleteUserById(id: number): Promise<UserEntity | null>;
}
