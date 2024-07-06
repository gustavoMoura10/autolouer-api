import AddressEntity from "../../database/entities/AddressEntity";
import Address from "../../types/Address";

export default interface InterfaceAddressRepository {
  createAddress(
    address: Address
  ): Promise<AddressEntity | null>;
  findAddressById(id: number): Promise<AddressEntity | null> | AddressEntity;
  findAllAddresses(): Promise<AddressEntity[]> | AddressEntity[];
  findAddressByEmail(
    email: string
  ): Promise<AddressEntity | null> | AddressEntity;
  updateAddressById(
    id: number,
    address: Address
  ): Promise<AddressEntity | null> | AddressEntity;
  deleteAddressById(id: number): Promise<AddressEntity | null> | AddressEntity;
}
