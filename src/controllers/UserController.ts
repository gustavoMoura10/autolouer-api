import { NextFunction, Request, Response } from "express";
import UserEntity from "../database/entities/UserEntity";
import UserRepository from "../repositories/UserRepository";
import type User from "../types/User";
import UserSchema from "../validator/UserSchema";
import AddressSchema from "../validator/AddressSchema";
import Address from "../types/Address";
import UserWithoutPassword from "../types/UserWithoutPassword";
export default class UserController {
  constructor(private userRepository: UserRepository) {}
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { firstName, lastName, email, password, document, birthdate } = <
        User
      >req.body;

      const result = await this.userRepository.createUser({
        firstName,
        lastName,
        email,
        password,
        document,
        birthdate,
      });

      return res.status(200).send({
        id: result?.id,
        birthdate: result?.birthdate,
        document: result?.document,
        email: result?.email,
        firstName: result?.firstName,
        lastName: result?.lastName,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async findUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await this.userRepository.findUserById(Number(id));
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.userRepository.findAllUsers();
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { firstName, lastName, email, password, document, birthdate } = <
        User
      >req.body;

      const result = await this.userRepository.updateUserById(Number(id), {
        firstName,
        lastName,
        email,
        password,
        document,
        birthdate,
      });
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await this.userRepository.deleteUserById(Number(id));
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
