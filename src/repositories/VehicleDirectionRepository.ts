import { Repository } from "typeorm";
import VehicleDirectionEntity from "../database/entities/VehicleDirectionEntity";
import VehicleDirection from "../types/VehicleDirection";
import InterfaceVehicleDirectionRepository from "./interfaces/InterfaceVehicleDirectionRepository";
import EntityNotFoundError from "../errors/EntityNotFoundError";

export default class VehicleDirectionRepository
  implements InterfaceVehicleDirectionRepository
{
  private repository: Repository<VehicleDirectionEntity>;
  constructor(repository: Repository<VehicleDirectionEntity>) {
    this.repository = repository;
  }
  createVehicleDirection(
    vehicleDirection: VehicleDirection
  ): Promise<VehicleDirectionEntity | null> {
    try {
      const createdVehicleDirection = new VehicleDirectionEntity(
        vehicleDirection.name
      );
      return this.repository.save(createdVehicleDirection);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async findVehicleDirectionById(
    id: number
  ): Promise<VehicleDirectionEntity | null> {
    try {
      const result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result === null) {
        throw new EntityNotFoundError("Vehicle direction entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  findAllVehicleDirections(): Promise<VehicleDirectionEntity[]> {
    try {
      return this.repository.find({
        relations: ["vehicles"],
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateVehicleDirectionById(
    id: number,
    vehicleDirection: VehicleDirection
  ): Promise<VehicleDirectionEntity | null> {
    try {
      let result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result !== null) {
        result.name = vehicleDirection.name || result.name;
        this.repository.save(result);
      } else {
        throw new EntityNotFoundError("Vehicle direction entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteVehicleDirectionById(
    id: number
  ): Promise<VehicleDirectionEntity | null> {
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
        throw new EntityNotFoundError("Vehicle direction entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
