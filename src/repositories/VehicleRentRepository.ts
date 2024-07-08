import VehicleRentEntity from "../database/entities/VehicleRentEntity";
import VehicleRent from "../types/VehicleRent";
import InterfaceVehicleRentRepository from "./interfaces/InterfaceVehicleRentRepository";

export default class VehicleRentRepository implements InterfaceVehicleRentRepository {
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
