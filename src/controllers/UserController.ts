import { NextFunction, Request, Response } from "express";
import UserEntity from "../database/entities/UserEntity";
import UserRepository from "../repositories/UserRepository";
import type User from "../types/User";
import UserSchema from "../validator/UserSchema";
import AddressSchema from "../validator/AddressSchema";
import Address from "../types/Address";

export default class UserController {
  constructor(private repository: UserRepository) {}
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = new UserSchema();
      await userSchema.create(req.body);
      const { firstName, lastName, email, password, document, birthdate } = <
        User
      >req.body;

      const result = await this.repository.createUser({
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

  async findUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await this.repository.findUserById(Number(id));
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.repository.findAllUsers();
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateUserAddress(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const addressSchema = new AddressSchema();
      await addressSchema.create(req.body);
      const {
        city,
        complement,
        country,
        district,
        neighbourhood,
        number,
        street,
      } = <Address>req.body;
      const result = await this.repository.updateUserAddress(Number(id), {
        city,
        complement,
        country,
        district,
        neighbourhood,
        number,
        street,
      } as Address);
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

      const result = await this.repository.updateUserById(Number(id), {
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
      const result = await this.repository.deleteUserById(Number(id));
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
