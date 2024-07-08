import VehicleExchangeEntity from "../../database/entities/VehicleExchangeEntity";
import VehicleExchange from "../../types/VehicleExchange";

export default interface InterfaceVehicleExchangeRepository {
  createVehicleExchange(
    vehicleExchange: VehicleExchange
  ): Promise<VehicleExchangeEntity | null> | VehicleExchangeEntity;
  findVehicleExchangeById(
    id: number
  ): Promise<VehicleExchangeEntity | null> | VehicleExchangeEntity;
  findAllVehicleExchanges():
    | Promise<VehicleExchangeEntity[]>
    | VehicleExchangeEntity[];
  updateVehicleExchangeById(
    id: number,
    vehicleExchange: VehicleExchange
  ): Promise<VehicleExchangeEntity | null> | VehicleExchangeEntity;
  deleteVehicleExchangeById(
    id: number
  ): Promise<VehicleExchangeEntity | null> | VehicleExchangeEntity;
}
