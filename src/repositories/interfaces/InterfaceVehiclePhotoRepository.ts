import VehiclePhotoEntity from "../../database/entities/VehiclePhotoEntity";
import VehiclePhoto from "../../types/VehiclePhoto";

export default interface InterfaceVehiclePhotoRepository {
  createVehiclePhoto(
    vehiclePhoto: VehiclePhoto
  ): Promise<VehiclePhotoEntity | null> | VehiclePhotoEntity;
  findVehiclePhotoById(
    id: number
  ): Promise<VehiclePhotoEntity | null> | VehiclePhotoEntity;
  findAllVehiclePhotos():
    | Promise<VehiclePhotoEntity[]>
    | VehiclePhotoEntity[];
  updateVehiclePhotoById(
    id: number,
    vehiclePhoto: VehiclePhoto
  ): Promise<VehiclePhotoEntity | null> | VehiclePhotoEntity;
  deleteVehiclePhotoById(
    id: number
  ): Promise<VehiclePhotoEntity | null> | VehiclePhotoEntity;
}
