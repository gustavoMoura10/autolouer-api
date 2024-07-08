import VehicleCategoryEntity from "../../database/entities/VehicleCategoryEntity";
import VehicleCategory from "../../types/VehicleCategory";

export default interface InterfaceVehicleCategoryRepository {
  createVehicleCategory(
    vehicleCategory: VehicleCategory
  ): Promise<VehicleCategoryEntity | null> | VehicleCategoryEntity;
  findVehicleCategoryById(
    id: number
  ): Promise<VehicleCategoryEntity | null> | VehicleCategoryEntity;
  findAllVehicleCategorys():
    | Promise<VehicleCategoryEntity[]>
    | VehicleCategoryEntity[];
  updateVehicleCategoryById(
    id: number,
    vehicleCategory: VehicleCategory
  ): Promise<VehicleCategoryEntity | null> | VehicleCategoryEntity;
  deleteVehicleCategoryById(
    id: number
  ): Promise<VehicleCategoryEntity | null> | VehicleCategoryEntity;
}
