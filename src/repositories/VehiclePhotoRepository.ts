import { Repository } from "typeorm";
import VehiclePhotoEntity from "../database/entities/VehiclePhotoEntity";
import VehiclePhoto from "../types/VehiclePhoto";
import InterfaceVehiclePhotoRepository from "./interfaces/InterfaceVehiclePhotoRepository";
import VehicleEntity from "../database/entities/VehicleEntity";
import EntityNotFoundError from "../errors/EntityNotFoundError";

export default class VehiclePhotoRepository
  implements InterfaceVehiclePhotoRepository
{
  private repository: Repository<VehiclePhotoEntity>;
  constructor(repository: Repository<VehiclePhotoEntity>) {
    this.repository = repository;
  }
  createVehiclePhoto(
    vehiclePhoto: VehiclePhoto
  ): Promise<VehiclePhotoEntity | null> {
    try {
      const createdVehiclePhoto = new VehiclePhotoEntity(
        vehiclePhoto.url,
        <VehicleEntity>vehiclePhoto.vehicle
      );
      return this.repository.save(createdVehiclePhoto);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async findVehiclePhotoById(id: number): Promise<VehiclePhotoEntity | null> {
    try {
      const result = await this.repository.findOne({
        where: {
          id,
        },
        relations: ["vehicles"],
      });
      if (result == null) {
        throw new EntityNotFoundError(`Vehicle Model not found`);
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  findAllVehiclePhotos(): Promise<VehiclePhotoEntity[]> {
    try {
      return this.repository.find({
        relations: ["vehicles"],
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateVehiclePhotoById(
    id: number,
    vehiclePhoto: VehiclePhoto
  ): Promise<VehiclePhotoEntity | null> {
    try {
      throw new Error();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteVehiclePhotoById(id: number): Promise<VehiclePhotoEntity | null> {
    try {
      const result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result !== null) {
        result.deletedAt = new Date();
        await this.repository.save(result);
      } else {
        throw new EntityNotFoundError("Vehicle photo entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
