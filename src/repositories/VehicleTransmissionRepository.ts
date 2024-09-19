import { Repository } from "typeorm";
import VehicleTransmissionEntity from "../database/entities/VehicleTransmissionEntity";
import VehicleTransmission from "../types/VehicleTransmission";
import InterfaceVehicleTransmissionRepository from "./interfaces/InterfaceVehicleTransmissionRepository";
import EntityNotFoundError from "../errors/EntityNotFoundError";

export default class VehicleTransmissionRepository
  implements InterfaceVehicleTransmissionRepository
{
  private repository: Repository<VehicleTransmissionEntity>;
  constructor(repository: Repository<VehicleTransmissionEntity>) {
    this.repository = repository;
  }
  createVehicleTransmission(
    vehicleTransmission: VehicleTransmission
  ): Promise<VehicleTransmissionEntity | null> {
    try {
      const createdVehicleTransmission = new VehicleTransmissionEntity(
        vehicleTransmission.name
      );
      return this.repository.save(createdVehicleTransmission);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async findVehicleTransmissionById(
    id: number
  ): Promise<VehicleTransmissionEntity | null> {
    try {
      const result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result === null) {
        throw new EntityNotFoundError("Vehicle transmission entity not found");
      }
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  findAllVehicleTransmissions(): Promise<VehicleTransmissionEntity[]> {
    try {
      return this.repository.find({
        relations: ["vehicles"],
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async updateVehicleTransmissionById(
    id: number,
    vehicleTransmission: VehicleTransmission
  ): Promise<VehicleTransmissionEntity | null> {
    try {
      let result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result !== null) {
        result.name = vehicleTransmission.name || result.name;
        this.repository.save(result);
      } else {
        throw new EntityNotFoundError("Vehicle transmission entity not found");
      }
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deleteVehicleTransmissionById(
    id: number
  ): Promise<VehicleTransmissionEntity | null> {
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
        throw new EntityNotFoundError("Vehicle transmission entity not found");
      }
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
