import { Repository } from "typeorm";
import VehicleTypeEntity from "../database/entities/VehicleTypeEntity";
import VehicleType from "../types/VehicleType";
import InterfaceVehicleTypeRepository from "./interfaces/InterfaceVehicleTypeRepository";
import CountryEntity from "../database/entities/CountryEntity";
import VehicleModelEntity from "../database/entities/VehicleModelEntity";
import EntityNotFoundError from "../errors/EntityNotFoundError";

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
        vehicleType.name
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
        relations: ["vehicleModels"],
      });
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async findAllVehicleTypes(): Promise<VehicleTypeEntity[]> {
    try {
      return this.repository.find({
        relations: ["vehicleModels"],
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateVehicleTypeById(
    id: number,
    vehicleType: VehicleType
  ): Promise<VehicleTypeEntity | null> {
    try {
      let result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result !== null) {
        result.name = vehicleType.name || result.name;
        result.vehicleModels =
          <VehicleModelEntity[]>vehicleType.vehicleModels ||
          result.vehicleModels;
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
  async deleteVehicleTypeById(id: number): Promise<VehicleTypeEntity | null> {
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
        throw new EntityNotFoundError("Country entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
