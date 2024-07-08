import { Repository } from "typeorm";
import VehicleDirectionEntity from "../database/entities/VehicleDirectionEntity";
import VehicleDirection from "../types/VehicleDirection";
import InterfaceVehicleDirectionRepository from "./interfaces/InterfaceVehicleDirectionRepository";

export default class VehicleDirectionRepository implements InterfaceVehicleDirectionRepository {

  private repository: Repository<VehicleDirectionEntity>;
  constructor(repository: Repository<VehicleDirectionEntity>) {
    this.repository = repository;
  }
  createVehicleDirection(vehicleDirection: VehicleDirection): Promise<VehicleDirectionEntity | null> | VehicleDirectionEntity {
    throw new Error("Method not implemented.");
  }
  findVehicleDirectionById(id: number): Promise<VehicleDirectionEntity | null> | VehicleDirectionEntity {
    throw new Error("Method not implemented.");
  }
  findAllVehicleDirections(): Promise<VehicleDirectionEntity[]> | VehicleDirectionEntity[] {
    throw new Error("Method not implemented.");
  }
  updateVehicleDirectionById(
    id: number,
    vehicleDirection: VehicleDirection
  ): Promise<VehicleDirectionEntity | null> | VehicleDirectionEntity {
    throw new Error("Method not implemented.");
  }
  deleteVehicleDirectionById(id: number): Promise<VehicleDirectionEntity | null> | VehicleDirectionEntity {
    throw new Error("Method not implemented.");
  }
}
