import { Repository } from "typeorm";
import VehicleCategoryEntity from "../database/entities/VehicleCategoryEntity";
import VehicleCategory from "../types/VehicleCategory";
import InterfaceVehicleCategoryRepository from "./interfaces/InterfaceVehicleCategoryRepository";
import EntityNotFoundError from "../errors/EntityNotFoundError";

export default class VehicleCategoryRepository
  implements InterfaceVehicleCategoryRepository
{
  private repository: Repository<VehicleCategoryEntity>;
  constructor(repository: Repository<VehicleCategoryEntity>) {
    this.repository = repository;
  }
  createVehicleCategory(
    vehicleCategory: VehicleCategory
  ): Promise<VehicleCategoryEntity | null> {
    try {
      const createdVehicleColor = new VehicleCategoryEntity(
        vehicleCategory.name
      );
      return this.repository.save(createdVehicleColor);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async findVehicleCategoryById(
    id: number
  ): Promise<VehicleCategoryEntity | null> {
    const result = await this.repository.findOne({
      where: {
        id,
      },
    });
    if (result === null) {
      throw new EntityNotFoundError("Vehicle category entity not found");
    }
    return result;
  }
  findAllVehicleCategories(): Promise<VehicleCategoryEntity[]> {
    try {
      return this.repository.find({
        relations: ["vehicles"],
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateVehicleCategoryById(
    id: number,
    vehicleCategory: VehicleCategory
  ): Promise<VehicleCategoryEntity | null> {
    try {
      let result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result !== null) {
        result.name = vehicleCategory.name || result.name;
        this.repository.save(result);
      } else {
        throw new EntityNotFoundError("Vehicle category entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteVehicleCategoryById(
    id: number
  ): Promise<VehicleCategoryEntity | null> {
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
        throw new EntityNotFoundError("Vehicle category entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
