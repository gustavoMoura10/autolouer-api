import { Repository } from "typeorm";
import VehicleRentEntity from "../database/entities/VehicleRentEntity";
import VehicleRent from "../types/VehicleRent";
import InterfaceVehicleRentRepository from "./interfaces/InterfaceVehicleRentRepository";

export default class VehicleRentRepository implements InterfaceVehicleRentRepository {
  private repository: Repository<VehicleRentEntity>;
  constructor(repository: Repository<VehicleRentEntity>) {
    this.repository = repository;
  }
  createVehicleRent(vehicleRent: VehicleRent): Promise<VehicleRentEntity | null> | VehicleRentEntity {
    throw new Error("Method not implemented.");
  }
  findVehicleRentById(id: number): Promise<VehicleRentEntity | null> | VehicleRentEntity {
    throw new Error("Method not implemented.");
  }
  findAllVehicleRents(): Promise<VehicleRentEntity[]> | VehicleRentEntity[] {
    throw new Error("Method not implemented.");
  }
  updateVehicleRentById(
    id: number,
    vehicleRent: VehicleRent
  ): Promise<VehicleRentEntity | null> | VehicleRentEntity {
    throw new Error("Method not implemented.");
  }
  deleteVehicleRentById(id: number): Promise<VehicleRentEntity | null> | VehicleRentEntity {
    throw new Error("Method not implemented.");
  }
}
