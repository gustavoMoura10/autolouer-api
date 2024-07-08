import VehicleFuelEntity from "../../database/entities/VehicleFuelEntity";
import VehicleFuel from "../../types/VehicleFuel";

export default interface InterfaceVehicleFuelRepository {
  createVehicleFuel(
    vehicleFuel: VehicleFuel
  ): Promise<VehicleFuelEntity | null> | VehicleFuelEntity;
  findVehicleFuelById(
    id: number
  ): Promise<VehicleFuelEntity | null> | VehicleFuelEntity;
  findAllVehicleFuels():
    | Promise<VehicleFuelEntity[]>
    | VehicleFuelEntity[];
  updateVehicleFuelById(
    id: number,
    vehicleFuel: VehicleFuel
  ): Promise<VehicleFuelEntity | null> | VehicleFuelEntity;
  deleteVehicleFuelById(
    id: number
  ): Promise<VehicleFuelEntity | null> | VehicleFuelEntity;
}
