import VehicleDirectionEntity from "../../database/entities/VehicleDirectionEntity";
import VehicleDirection from "../../types/VehicleDirection";

export default interface InterfaceVehicleDirectionRepository {
  createVehicleDirection(
    vehicleDirection: VehicleDirection
  ): Promise<VehicleDirectionEntity | null> | VehicleDirectionEntity;
  findVehicleDirectionById(
    id: number
  ): Promise<VehicleDirectionEntity | null> | VehicleDirectionEntity;
  findAllVehicleDirections():
    | Promise<VehicleDirectionEntity[]>
    | VehicleDirectionEntity[];
  updateVehicleDirectionById(
    id: number,
    vehicleDirection: VehicleDirection
  ): Promise<VehicleDirectionEntity | null> | VehicleDirectionEntity;
  deleteVehicleDirectionById(
    id: number
  ): Promise<VehicleDirectionEntity | null> | VehicleDirectionEntity;
}
