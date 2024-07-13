import { Repository } from "typeorm";
import VehicleTypeEntity from "../database/entities/VehicleTypeEntity";
import VehicleType from "../types/VehicleType";
import InterfaceVehicleTypeRepository from "./interfaces/InterfaceVehicleTypeRepository";
import CountryEntity from "../database/entities/CountryEntity";

export default class VehicleTypeRepository
  implements InterfaceVehicleTypeRepository
{
  private repository: Repository<VehicleTypeEntity>;
  constructor(repository: Repository<VehicleTypeEntity>) {
    this.repository = repository;
  }
  createVehicleType(
    vehicleType: VehicleType
  ): Promise<VehicleTypeEntity | null> | VehicleTypeEntity {
    try {
      const createdVehicleType = new VehicleTypeEntity(
        vehicleType.name,
        <CountryEntity>vehicleType.country
      );
      return this.repository.save(createdVehicleType);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async findVehicleTypeById(id: number): Promise<VehicleTypeEntity | null> {
    try {
      const result = await this.repository.findOne({
        where: {
          id,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async findAllVehicleTypes(): Promise<VehicleTypeEntity[]> {
    try {
      const result = await this.repository.find();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  updateVehicleTypeById(
    id: number,
    vehicleType: VehicleType
  ): Promise<VehicleTypeEntity | null> | VehicleTypeEntity {
    throw new Error("Method not implemented.");
  }
  deleteVehicleTypeById(
    id: number
  ): Promise<VehicleTypeEntity | null> | VehicleTypeEntity {
    throw new Error("Method not implemented.");
  }
}
