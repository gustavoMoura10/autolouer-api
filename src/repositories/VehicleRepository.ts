import { Repository } from "typeorm";
import VehicleEntity from "../database/entities/VehicleEntity";
import Vehicle from "../types/Vehicle";
import InterfaceVehicleRepository from "./interfaces/InterfaceVehicleRepository";
import VehicleFuelEntity from "../database/entities/VehicleFuelEntity";
import VehicleColorEntity from "../database/entities/VehicleColorEntity";
import VehicleCategoryEntity from "../database/entities/VehicleCategoryEntity";
import VehicleDirectionEntity from "../database/entities/VehicleDirectionEntity";
import VehicleTransmissionEntity from "../database/entities/VehicleTransmissionEntity";
import VehicleModelEntity from "../database/entities/VehicleModelEntity";
import VehiclePhotoEntity from "../database/entities/VehiclePhotoEntity";
import EntityNotFoundError from "../errors/EntityNotFoundError";

export default class VehicleRepository implements InterfaceVehicleRepository {
  private repository: Repository<VehicleEntity>;
  constructor(repository: Repository<VehicleEntity>) {
    this.repository = repository;
  }
  createVehicle(vehicle: Vehicle): Promise<VehicleEntity | null> {
    try {
      const createdVehicle = new VehicleEntity(
        vehicle.year,
        vehicle.description,
        vehicle.mileage,
        vehicle.motorPower,
        <VehicleFuelEntity>vehicle.vehicleFuel,
        <VehicleColorEntity>vehicle.vehicleColor,
        vehicle.doors,
        vehicle.vehiclePlate,
        <VehicleCategoryEntity>vehicle.vehicleCategory,
        <VehicleDirectionEntity>vehicle.vehicleDirection,
        <VehicleTransmissionEntity>vehicle.vehicleTransmission,
        <VehicleModelEntity>vehicle.vehicleModel,
        <VehiclePhotoEntity[]>vehicle.vehiclePhotos
      );
      return this.repository.save(createdVehicle);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async findVehicleById(id: number): Promise<VehicleEntity | null> {
    try {
      const result = await this.repository.findOne({
        where: {
          id,
        },
        relations: [
          "vehicleFuel",
          "vehicleColor",
          "vehicleCategory",
          "vehicleDirection",
          "vehicleTransmission",
          "vehicleModel",
          "vehiclePhotos",
        ],
      });
      if (result === null) {
        throw new EntityNotFoundError("Vehicle entity not found");
      }
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  findAllVehicles(): Promise<VehicleEntity[]> {
    try {
      return this.repository.find({
        relations: [
          "vehicleFuel",
          "vehicleColor",
          "vehicleCategory",
          "vehicleDirection",
          "vehicleTransmission",
          "vehicleModel",
          "vehiclePhotos",
        ],
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async updateVehicleById(
    id: number,
    vehicle: Vehicle
  ): Promise<VehicleEntity | null> {
    try {
      let result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result !== null) {
        result.year = vehicle.year || result.year;
        result.description = vehicle.description || result.description;
        result.mileage = vehicle.mileage || result.mileage;
        result.motorPower = vehicle.motorPower || result.motorPower;
        result.vehicleFuel =
          <VehicleFuelEntity>vehicle.vehicleFuel || result.vehicleFuel;
        result.vehicleColor =
          <VehicleColorEntity>vehicle.vehicleColor || result.vehicleColor;
        result.doors = vehicle.doors || result.doors;
        result.vehiclePlate = vehicle.vehiclePlate || result.vehiclePlate;
        result.vehicleCategory =
          <VehicleCategoryEntity>vehicle.vehicleCategory ||
          result.vehicleCategory;
        result.vehicleDirection =
          <VehicleDirectionEntity>vehicle.vehicleDirection ||
          result.vehicleDirection;
        result.vehicleTransmission =
          <VehicleTransmissionEntity>vehicle.vehicleTransmission ||
          result.vehicleTransmission;
        result.vehicleModel =
          <VehicleModelEntity>vehicle.vehicleModel || result.vehicleModel;
        this.repository.save(result);
      } else {
        throw new EntityNotFoundError("Vehicle entity not found");
      }
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deleteVehicleById(id: number): Promise<VehicleEntity | null> {
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
        throw new EntityNotFoundError("Vehicle entity not found");
      }
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
