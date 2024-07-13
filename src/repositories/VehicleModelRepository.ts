import { Repository } from "typeorm";
import VehicleModelEntity from "../database/entities/VehicleModelEntity";
import VehicleModel from "../types/VehicleModel";
import InterfaceVehicleModelRepository from "./interfaces/InterfaceVehicleModelRepository";
import VehicleTypeEntity from "../database/entities/VehicleTypeEntity";
import BrandEntity from "../database/entities/BrandEntity";

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
  findVehicleModelById(
    id: number
  ): Promise<VehicleModelEntity | null> | VehicleModelEntity {
    throw new Error("Method not implemented.");
  }
  findAllVehicleModels(): Promise<VehicleModelEntity[]> | VehicleModelEntity[] {
    throw new Error("Method not implemented.");
  }
  updateVehicleModelById(
    id: number,
    vehicleModel: VehicleModel
  ): Promise<VehicleModelEntity | null> | VehicleModelEntity {
    throw new Error("Method not implemented.");
  }
  deleteVehicleModelById(
    id: number
  ): Promise<VehicleModelEntity | null> | VehicleModelEntity {
    throw new Error("Method not implemented.");
  }
}
