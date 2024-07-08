import VehicleExchangeEntity from "../database/entities/VehicleExchangeEntity";
import VehicleExchange from "../types/VehicleExchange";
import InterfaceVehicleExchangeRepository from "./interfaces/InterfaceVehicleExchangeRepository";

export default class VehicleExchangeRepository implements InterfaceVehicleExchangeRepository {
  createVehicleExchange(vehicleExchange: VehicleExchange): Promise<VehicleExchangeEntity | null> | VehicleExchangeEntity {
    throw new Error("Method not implemented.");
  }
  findVehicleExchangeById(id: number): Promise<VehicleExchangeEntity | null> | VehicleExchangeEntity {
    throw new Error("Method not implemented.");
  }
  findAllVehicleExchanges(): Promise<VehicleExchangeEntity[]> | VehicleExchangeEntity[] {
    throw new Error("Method not implemented.");
  }
  updateVehicleExchangeById(
    id: number,
    vehicleExchange: VehicleExchange
  ): Promise<VehicleExchangeEntity | null> | VehicleExchangeEntity {
    throw new Error("Method not implemented.");
  }
  deleteVehicleExchangeById(id: number): Promise<VehicleExchangeEntity | null> | VehicleExchangeEntity {
    throw new Error("Method not implemented.");
  }
}
