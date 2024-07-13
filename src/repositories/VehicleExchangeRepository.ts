import { Repository } from "typeorm";
import VehicleExchangeEntity from "../database/entities/VehicleExchangeEntity";
import VehicleExchange from "../types/VehicleExchange";
import InterfaceVehicleExchangeRepository from "./interfaces/InterfaceVehicleExchangeRepository";

export default class VehicleExchangeRepository
  implements InterfaceVehicleExchangeRepository
{
  private repository: Repository<VehicleExchangeEntity>;
  constructor(repository: Repository<VehicleExchangeEntity>) {
    this.repository = repository;
  }
  createVehicleExchange(
    vehicleExchange: VehicleExchange
  ): Promise<VehicleExchangeEntity | null> | VehicleExchangeEntity {
    try {
      const createdVehicleExchange = new VehicleExchangeEntity(
        vehicleExchange.name
      );
      return this.repository.save(createdVehicleExchange);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  findVehicleExchangeById(
    id: number
  ): Promise<VehicleExchangeEntity | null> | VehicleExchangeEntity {
    throw new Error("Method not implemented.");
  }
  findAllVehicleExchanges():
    | Promise<VehicleExchangeEntity[]>
    | VehicleExchangeEntity[] {
    throw new Error("Method not implemented.");
  }
  updateVehicleExchangeById(
    id: number,
    vehicleExchange: VehicleExchange
  ): Promise<VehicleExchangeEntity | null> | VehicleExchangeEntity {
    throw new Error("Method not implemented.");
  }
  deleteVehicleExchangeById(
    id: number
  ): Promise<VehicleExchangeEntity | null> | VehicleExchangeEntity {
    throw new Error("Method not implemented.");
  }
}
