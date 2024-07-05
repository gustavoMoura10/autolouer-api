import { FindOneOptions, IsNull, Repository } from "typeorm";

import InterfaceUserRepository from "./interfaces/InterfaceUserRepository";
import UserEntity from "../database/entities/UserEntity";
import Address from "../types/Address";
import { AddressEntity } from "../database/entities/AddressEntity";
import EntityNotFoundError from "../errors/EntityNotFoundError";
import User from "../types/User";
import bcrypt from "bcrypt";

const salt = bcrypt.genSaltSync(10);
export default class UserRepository implements InterfaceUserRepository {
  private repository: Repository<UserEntity>;
  constructor(repository: Repository<UserEntity>) {
    this.repository = repository;
  }

  createUser(user: User): Promise<UserEntity | null> {
    try {
      const createUser = new UserEntity(
        user.firstName,
        user.lastName,
        user.email,
        user.document,
        user.birthdate,
        bcrypt.hashSync(user.password, salt)
      );
      const result = this.repository.save(createUser);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  findUserById(id: number): Promise<UserEntity | null> {
    try {
      return this.repository.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  findAllUsers(): Promise<UserEntity[]> {
    try {
      return this.repository.find({
        where: {
          deletedAt: IsNull(),
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  findUserByEmail(email: string): Promise<UserEntity | null> {
    try {
      return this.repository.findOne({
        where: {
          email,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateUserById(id: number, user: User): Promise<UserEntity | null> {
    try {
      let result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result !== null) {
        result.birthdate = user.birthdate || result.birthdate;
        result.firstName = user.firstName || result.firstName;
        result.lastName = user.lastName || result.lastName;
        result.email = user.email || result.email;
        result.document = user.document || result.document;
        result.password = user.password
          ? bcrypt.hashSync(user.password, salt)
          : result.document;
        this.repository.save(result);
      } else {
        throw new EntityNotFoundError("User entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteUserById(id: number): Promise<UserEntity | null> {
    try {
      const result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result !== null) {
        result.deletedAt = new Date();
        await this.repository.save(result);
      } else {
        throw new EntityNotFoundError("User entity not found");
      }
      return result;
      return this.repository.findOne({
        where: { id },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateUserAddress(
    id: number,
    address: Address
  ): Promise<UserEntity | null> {
    try {
      const result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result !== null) {
        const createdAddress = new AddressEntity(
          address.number,
          address.street,
          address.complement,
          address.neighbourhood,
          address.city,
          address.district,
          address.country
        );
        result.address = createdAddress;
        await this.repository.save(result);
      } else {
        throw new EntityNotFoundError("User entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
