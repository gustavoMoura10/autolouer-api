import { Repository } from "typeorm";
import VehicleModelEntity from "../database/entities/VehicleModelEntity";
import VehicleModel from "../types/VehicleModel";
import InterfaceVehicleModelRepository from "./interfaces/InterfaceVehicleModelRepository";
import VehicleTypeEntity from "../database/entities/VehicleTypeEntity";
import BrandEntity from "../database/entities/BrandEntity";
import EntityNotFoundError from "../errors/EntityNotFoundError";

export default class VehicleModelRepository
  implements InterfaceVehicleModelRepository
{
  private repository: Repository<VehicleModelEntity>;
  constructor(repository: Repository<VehicleModelEntity>) {
    this.repository = repository;
  }
  createVehicleModel(
    vehicleModel: VehicleModel
  ): Promise<VehicleModelEntity | null> | VehicleModelEntity {
    try {
      const createdVehicleModel = new VehicleModelEntity(
        vehicleModel.name,
        <BrandEntity>vehicleModel.brand,
        <VehicleTypeEntity[]>vehicleModel.vehicleTypes,
        vehicleModel.bio,
        vehicleModel.photo
      );
      return this.repository.save(createdVehicleModel);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async findVehicleModelById(id: number): Promise<VehicleModelEntity | null> {
    try {
      const result = await this.repository.findOne({
        where: {
          id,
        },
        relations: ["brand", "vehicleTypes", "vehicles"],
      });
      if (result == null) {
        throw new EntityNotFoundError(`Vehicle Model not found`);
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  findAllVehicleModels(): Promise<VehicleModelEntity[]> | VehicleModelEntity[] {
    try {
      return this.repository.find({
        relations: ["brand", "vehicleTypes"],
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateVehicleModelById(
    id: number,
    vehicleModel: VehicleModel
  ): Promise<VehicleModelEntity | null> {
    try {
      const result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result === null) {
        throw new EntityNotFoundError(`Vehicle Model not found`);
      }
      result.name = vehicleModel.name || result.name;
      result.bio = vehicleModel.bio || result.bio;
      result.photo = vehicleModel.photo || result.photo;
      result.brand = <BrandEntity>vehicleModel.brand || result.brand;
      result.vehicleTypes =
        <VehicleTypeEntity[]>vehicleModel.vehicleTypes || result.vehicleTypes;
      return this.repository.save(result);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteVehicleModelById(id: number): Promise<VehicleModelEntity | null> {
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
        throw new EntityNotFoundError("Vehicle model entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
