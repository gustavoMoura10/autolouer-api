import VehicleTransmissionEntity from "../../database/entities/VehicleTransmissionEntity";
import VehicleTransmission from "../../types/VehicleTransmission";

export default interface InterfaceVehicleTransmissionRepository {
  createVehicleTransmission(
    vehicleTransmission: VehicleTransmission
  ): Promise<VehicleTransmissionEntity | null> | VehicleTransmissionEntity;
  findVehicleTransmissionById(
    id: number
  ): Promise<VehicleTransmissionEntity | null> | VehicleTransmissionEntity;
  findAllVehicleTransmissions():
    | Promise<VehicleTransmissionEntity[]>
    | VehicleTransmissionEntity[];
  updateVehicleTransmissionById(
    id: number,
    vehicleTransmission: VehicleTransmission
  ): Promise<VehicleTransmissionEntity | null> | VehicleTransmissionEntity;
  deleteVehicleTransmissionById(
    id: number
  ): Promise<VehicleTransmissionEntity | null> | VehicleTransmissionEntity;
}
