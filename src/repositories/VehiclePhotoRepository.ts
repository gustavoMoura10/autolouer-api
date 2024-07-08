import { Repository } from "typeorm";
import VehiclePhotoEntity from "../database/entities/VehiclePhotoEntity";
import VehiclePhoto from "../types/VehiclePhoto";
import InterfaceVehiclePhotoRepository from "./interfaces/InterfaceVehiclePhotoRepository";

export default class VehiclePhotoRepository implements InterfaceVehiclePhotoRepository {
  private repository: Repository<VehiclePhotoEntity>;
  constructor(repository: Repository<VehiclePhotoEntity>) {
    this.repository = repository;
  }
  createVehiclePhoto(vehiclePhoto: VehiclePhoto): Promise<VehiclePhotoEntity | null> | VehiclePhotoEntity {
    throw new Error("Method not implemented.");
  }
  findVehiclePhotoById(id: number): Promise<VehiclePhotoEntity | null> | VehiclePhotoEntity {
    throw new Error("Method not implemented.");
  }
  findAllVehiclePhotos(): Promise<VehiclePhotoEntity[]> | VehiclePhotoEntity[] {
    throw new Error("Method not implemented.");
  }
  updateVehiclePhotoById(
    id: number,
    vehiclePhoto: VehiclePhoto
  ): Promise<VehiclePhotoEntity | null> | VehiclePhotoEntity {
    throw new Error("Method not implemented.");
  }
  deleteVehiclePhotoById(id: number): Promise<VehiclePhotoEntity | null> | VehiclePhotoEntity {
    throw new Error("Method not implemented.");
  }
}
