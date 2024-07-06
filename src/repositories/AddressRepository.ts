import { Repository } from "typeorm";
import AddressEntity from "../database/entities/AddressEntity";
import Address from "../types/Address";
import InterfaceAddressRepository from "./interfaces/InterfaceAddressRepository";

export default class AddressRepository implements InterfaceAddressRepository {
  private repository: Repository<AddressEntity>;
  constructor(repository: Repository<AddressEntity>) {
    this.repository = repository;
  }
  async createAddress(address: Address): Promise<AddressEntity | null> {
    try {
      const createAddress = new AddressEntity(
        address.number,
        address.street,
        address.complement,
        address.neighbourhood,
        address.city,
        address.district,
        address.country
      );
      const result = await this.repository.save(createAddress);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  findAddressById(id: number): AddressEntity | Promise<AddressEntity | null> {
    throw new Error("Method not implemented.");
  }
  findAllAddresses(): AddressEntity[] | Promise<AddressEntity[]> {
    throw new Error("Method not implemented.");
  }
  findAddressByEmail(
    email: string
  ): AddressEntity | Promise<AddressEntity | null> {
    throw new Error("Method not implemented.");
  }
  updateAddressById(
    id: number,
    address: Address
  ): AddressEntity | Promise<AddressEntity | null> {
    throw new Error("Method not implemented.");
  }
  deleteAddressById(id: number): AddressEntity | Promise<AddressEntity | null> {
    throw new Error("Method not implemented.");
  }
}
