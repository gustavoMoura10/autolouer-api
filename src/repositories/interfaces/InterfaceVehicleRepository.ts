export default interface InterfaceVehicleRepository {
    
}
import VehicleEntity from "../../database/entities/VehicleEntity";
import Vehicle from "../../types/Vehicle";

export default interface InterfaceVehicleRepository {
  createVehicle(
    vehicle: Vehicle
  ): Promise<VehicleEntity | null> | VehicleEntity;
  findVehicleById(
    id: number
  ): Promise<VehicleEntity | null> | VehicleEntity;
  findAllVehicles():
    | Promise<VehicleEntity[]>
    | VehicleEntity[];
  updateVehicleById(
    id: number,
    vehicle: Vehicle
  ): Promise<VehicleEntity | null> | VehicleEntity;
  deleteVehicleById(
    id: number
  ): Promise<VehicleEntity | null> | VehicleEntity;
}
