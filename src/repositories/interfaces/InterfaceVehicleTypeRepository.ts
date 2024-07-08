export default interface InterfaceVehicleTypeRepository {
    
}
import VehicleTypeEntity from "../../database/entities/VehicleTypeEntity";
import VehicleType from "../../types/VehicleType";

export default interface InterfaceVehicleTypeRepository {
  createVehicleType(
    vehicleType: VehicleType
  ): Promise<VehicleTypeEntity | null> | VehicleTypeEntity;
  findVehicleTypeById(
    id: number
  ): Promise<VehicleTypeEntity | null> | VehicleTypeEntity;
  findAllVehicleTypes():
    | Promise<VehicleTypeEntity[]>
    | VehicleTypeEntity[];
  updateVehicleTypeById(
    id: number,
    vehicleType: VehicleType
  ): Promise<VehicleTypeEntity | null> | VehicleTypeEntity;
  deleteVehicleTypeById(
    id: number
  ): Promise<VehicleTypeEntity | null> | VehicleTypeEntity;
}
