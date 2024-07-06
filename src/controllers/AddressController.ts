import { NextFunction, Request, Response } from "express";
import AddressRepository from "../repositories/AddressRepository";
import UserRepository from "../repositories/UserRepository";
import Address from "../types/Address";
import User from "../types/User";

export default class AddressController {
  constructor(
    private addressRepository: AddressRepository,
    private userRepository: UserRepository
  ) {}
  async createAddress(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {
        street,
        number,
        city,
        district,
        zipCode,
        complement,
        country,
        neighbourhood,
      } = <Address>req.body;
      await this.userRepository.findUserById(Number(id));
      const address = await this.addressRepository.createAddress({
        street,
        number,
        city,
        district,
        zipCode,
        complement,
        country,
        neighbourhood,
      });
      await this.userRepository.updateUserById(Number(id), {
        address,
      } as User);
      return res.status(200).send(address);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
