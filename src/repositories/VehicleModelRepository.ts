import { Repository } from "typeorm";
import VehicleModelEntity from "../database/entities/VehicleModelEntity";
import VehicleModel from "../types/VehicleModel";
import InterfaceVehicleModelRepository from "./interfaces/InterfaceVehicleModelRepository";

export default class VehicleModelRepository implements InterfaceVehicleModelRepository {
  private repository: Repository<VehicleModelEntity>;
  constructor(repository: Repository<VehicleModelEntity>) {
    this.repository = repository;
  }
  createVehicleModel(vehicleModel: VehicleModel): Promise<VehicleModelEntity | null> | VehicleModelEntity {
    throw new Error("Method not implemented.");
  }
  findVehicleModelById(id: number): Promise<VehicleModelEntity | null> | VehicleModelEntity {
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
  deleteVehicleModelById(id: number): Promise<VehicleModelEntity | null> | VehicleModelEntity {
    throw new Error("Method not implemented.");
  }
}
