import VehicleRentEntity from "../../database/entities/VehicleRentEntity";
import VehicleRent from "../../types/VehicleRent";

export default interface InterfaceVehicleRentRepository {
  createVehicleRent(
    vehicleRent: VehicleRent
  ): Promise<VehicleRentEntity | null> | VehicleRentEntity;
  findVehicleRentById(
    id: number
  ): Promise<VehicleRentEntity | null> | VehicleRentEntity;
  findAllVehicleRents():
    | Promise<VehicleRentEntity[]>
    | VehicleRentEntity[];
  updateVehicleRentById(
    id: number,
    vehicleRent: VehicleRent
  ): Promise<VehicleRentEntity | null> | VehicleRentEntity;
  deleteVehicleRentById(
    id: number
  ): Promise<VehicleRentEntity | null> | VehicleRentEntity;
}
