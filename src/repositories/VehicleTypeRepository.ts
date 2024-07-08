import { Repository } from "typeorm";
import VehicleTypeEntity from "../database/entities/VehicleTypeEntity";
import VehicleType from "../types/VehicleType";
import InterfaceVehicleTypeRepository from "./interfaces/InterfaceVehicleTypeRepository";

export default class VehicleTypeRepository implements InterfaceVehicleTypeRepository {
  private repository: Repository<VehicleTypeEntity>;
  constructor(repository: Repository<VehicleTypeEntity>) {
    this.repository = repository;
  }
  createVehicleType(vehicleType: VehicleType): Promise<VehicleTypeEntity | null> | VehicleTypeEntity {
    throw new Error("Method not implemented.");
  }
  findVehicleTypeById(id: number): Promise<VehicleTypeEntity | null> | VehicleTypeEntity {
    throw new Error("Method not implemented.");
  }
  findAllVehicleTypes(): Promise<VehicleTypeEntity[]> | VehicleTypeEntity[] {
    throw new Error("Method not implemented.");
  }
  updateVehicleTypeById(
    id: number,
    vehicleType: VehicleType
  ): Promise<VehicleTypeEntity | null> | VehicleTypeEntity {
    throw new Error("Method not implemented.");
  }
  deleteVehicleTypeById(id: number): Promise<VehicleTypeEntity | null> | VehicleTypeEntity {
    throw new Error("Method not implemented.");
  }
}
