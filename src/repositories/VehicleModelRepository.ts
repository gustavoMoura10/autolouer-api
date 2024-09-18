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
        relations: ["brand", "vehicleTypes"],
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
      throw new Error("Method not implemented.");
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  deleteVehicleModelById(
    id: number
  ): Promise<VehicleModelEntity | null> | VehicleModelEntity {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
