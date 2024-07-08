import { Repository } from "typeorm";
import VehicleCategoryEntity from "../database/entities/VehicleCategoryEntity";
import VehicleCategory from "../types/VehicleCategory";
import InterfaceVehicleCategoryRepository from "./interfaces/InterfaceVehicleCategoryRepository";

export default class VehicleCategoryRepository
  implements InterfaceVehicleCategoryRepository
{
  private repository: Repository<VehicleCategoryEntity>;
  constructor(repository: Repository<VehicleCategoryEntity>) {
    this.repository = repository;
  }
  createVehicleCategory(
    vehicleCategory: VehicleCategory
  ): Promise<VehicleCategoryEntity | null> | VehicleCategoryEntity {
    throw new Error("Method not implemented.");
  }
  findVehicleCategoryById(
    id: number
  ): Promise<VehicleCategoryEntity | null> | VehicleCategoryEntity {
    throw new Error("Method not implemented.");
  }
  findAllVehicleCategorys():
    | Promise<VehicleCategoryEntity[]>
    | VehicleCategoryEntity[] {
    throw new Error("Method not implemented.");
  }
  updateVehicleCategoryById(
    id: number,
    vehicleCategory: VehicleCategory
  ): Promise<VehicleCategoryEntity | null> | VehicleCategoryEntity {
    throw new Error("Method not implemented.");
  }
  deleteVehicleCategoryById(
    id: number
  ): Promise<VehicleCategoryEntity | null> | VehicleCategoryEntity {
    throw new Error("Method not implemented.");
  }
}
