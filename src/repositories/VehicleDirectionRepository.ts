import { Repository } from "typeorm";
import VehicleDirectionEntity from "../database/entities/VehicleDirectionEntity";
import VehicleDirection from "../types/VehicleDirection";
import InterfaceVehicleDirectionRepository from "./interfaces/InterfaceVehicleDirectionRepository";

export default class VehicleDirectionRepository
  implements InterfaceVehicleDirectionRepository
{
  private repository: Repository<VehicleDirectionEntity>;
  constructor(repository: Repository<VehicleDirectionEntity>) {
    this.repository = repository;
  }
  createVehicleDirection(
    vehicleDirection: VehicleDirection
  ): Promise<VehicleDirectionEntity | null> | VehicleDirectionEntity {
    try {
      const createdVehicleDirection = new VehicleDirectionEntity(vehicleDirection.name);
      return this.repository.save(createdVehicleDirection);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  findVehicleDirectionById(
    id: number
  ): Promise<VehicleDirectionEntity | null> | VehicleDirectionEntity {
    throw new Error("Method not implemented.");
  }
  findAllVehicleDirections():
    | Promise<VehicleDirectionEntity[]>
    | VehicleDirectionEntity[] {
    throw new Error("Method not implemented.");
  }
  updateVehicleDirectionById(
    id: number,
    vehicleDirection: VehicleDirection
  ): Promise<VehicleDirectionEntity | null> | VehicleDirectionEntity {
    throw new Error("Method not implemented.");
  }
  deleteVehicleDirectionById(
    id: number
  ): Promise<VehicleDirectionEntity | null> | VehicleDirectionEntity {
    throw new Error("Method not implemented.");
  }
}
