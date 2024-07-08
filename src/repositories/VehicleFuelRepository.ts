import { Repository } from "typeorm";
import VehicleFuelEntity from "../database/entities/VehicleFuelEntity";
import VehicleFuel from "../types/VehicleFuel";
import InterfaceVehicleFuelRepository from "./interfaces/InterfaceVehicleFuelRepository";

export default class VehicleFuelRepository implements InterfaceVehicleFuelRepository {
  private repository: Repository<VehicleFuelEntity>;
  constructor(repository: Repository<VehicleFuelEntity>) {
    this.repository = repository;
  }
  createVehicleFuel(vehicleFuel: VehicleFuel): Promise<VehicleFuelEntity | null> | VehicleFuelEntity {
    throw new Error("Method not implemented.");
  }
  findVehicleFuelById(id: number): Promise<VehicleFuelEntity | null> | VehicleFuelEntity {
    throw new Error("Method not implemented.");
  }
  findAllVehicleFuels(): Promise<VehicleFuelEntity[]> | VehicleFuelEntity[] {
    throw new Error("Method not implemented.");
  }
  updateVehicleFuelById(
    id: number,
    vehicleFuel: VehicleFuel
  ): Promise<VehicleFuelEntity | null> | VehicleFuelEntity {
    throw new Error("Method not implemented.");
  }
  deleteVehicleFuelById(id: number): Promise<VehicleFuelEntity | null> | VehicleFuelEntity {
    throw new Error("Method not implemented.");
  }
}
