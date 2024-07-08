import VehicleModelEntity from "../../database/entities/VehicleModelEntity";
import VehicleModel from "../../types/VehicleModel";

export default interface InterfaceVehicleModelRepository {
  createVehicleModel(
    vehicleModel: VehicleModel
  ): Promise<VehicleModelEntity | null> | VehicleModelEntity;
  findVehicleModelById(
    id: number
  ): Promise<VehicleModelEntity | null> | VehicleModelEntity;
  findAllVehicleModels():
    | Promise<VehicleModelEntity[]>
    | VehicleModelEntity[];
  updateVehicleModelById(
    id: number,
    vehicleModel: VehicleModel
  ): Promise<VehicleModelEntity | null> | VehicleModelEntity;
  deleteVehicleModelById(
    id: number
  ): Promise<VehicleModelEntity | null> | VehicleModelEntity;
}
