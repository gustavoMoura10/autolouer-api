import VehicleColorEntity from "../../database/entities/VehicleColorEntity";
import VehicleColor from "../../types/VehicleColor";

export default interface InterfaceVehicleColorRepository {
  createVehicleColor(
    vehicleColor: VehicleColor
  ): Promise<VehicleColorEntity | null> | VehicleColorEntity;
  findVehicleColorById(
    id: number
  ): Promise<VehicleColorEntity | null> | VehicleColorEntity;
  findAllVehicleColors(): Promise<VehicleColorEntity[]> | VehicleColorEntity[];
  updateVehicleColorById(
    id: number,
    vehicleColor: VehicleColor
  ): Promise<VehicleColorEntity | null> | VehicleColorEntity;
  deleteVehicleColorById(
    id: number
  ): Promise<VehicleColorEntity | null> | VehicleColorEntity;
}
