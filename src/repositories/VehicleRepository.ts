import VehicleEntity from "../database/entities/VehicleEntity";
import Vehicle from "../types/Vehicle";
import InterfaceVehicleRepository from "./interfaces/InterfaceVehicleRepository";

export default class VehicleRepository implements InterfaceVehicleRepository {
  createVehicle(vehiclek: Vehicle): Promise<VehicleEntity | null> | VehicleEntity {
    throw new Error("Method not implemented.");
  }
  findVehicleById(id: number): Promise<VehicleEntity | null> | VehicleEntity {
    throw new Error("Method not implemented.");
  }
  findAllVehicles(): Promise<VehicleEntity[]> | VehicleEntity[] {
    throw new Error("Method not implemented.");
  }
  updateVehicleById(
    id: number,
    vehiclek: Vehicle
  ): Promise<VehicleEntity | null> | VehicleEntity {
    throw new Error("Method not implemented.");
  }
  deleteVehicleById(id: number): Promise<VehicleEntity | null> | VehicleEntity {
    throw new Error("Method not implemented.");
  }
}
