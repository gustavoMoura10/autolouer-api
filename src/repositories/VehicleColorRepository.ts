import VehicleColorEntity from "../database/entities/VehicleColorEntity";
import VehicleColor from "../types/VehicleColor";
import InterfaceVehicleColorRepository from "./interfaces/InterfaceVehicleColorRepository";

export default class VehicleColorRepository implements InterfaceVehicleColorRepository {
  createVehicleColor(vehicleColor: VehicleColor): Promise<VehicleColorEntity | null> | VehicleColorEntity {
    throw new Error("Method not implemented.");
  }
  findVehicleColorById(id: number): Promise<VehicleColorEntity | null> | VehicleColorEntity {
    throw new Error("Method not implemented.");
  }
  findAllVehicleColors(): Promise<VehicleColorEntity[]> | VehicleColorEntity[] {
    throw new Error("Method not implemented.");
  }
  updateVehicleColorById(
    id: number,
    vehicleColor: VehicleColor
  ): Promise<VehicleColorEntity | null> | VehicleColorEntity {
    throw new Error("Method not implemented.");
  }
  deleteVehicleColorById(id: number): Promise<VehicleColorEntity | null> | VehicleColorEntity {
    throw new Error("Method not implemented.");
  }
}
