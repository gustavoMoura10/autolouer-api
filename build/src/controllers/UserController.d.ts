import { NextFunction, Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";
export default class UserController {
    private repository;
    constructor(repository: UserRepository);
    createUser(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
