import { Repository } from "typeorm";
import VehicleColorEntity from "../database/entities/VehicleColorEntity";
import VehicleColor from "../types/VehicleColor";
import InterfaceVehicleColorRepository from "./interfaces/InterfaceVehicleColorRepository";
import EntityNotFoundError from "../errors/EntityNotFoundError";

export default class VehicleColorRepository
  implements InterfaceVehicleColorRepository
{
  private repository: Repository<VehicleColorEntity>;
  constructor(repository: Repository<VehicleColorEntity>) {
    this.repository = repository;
  }
  createVehicleColor(
    vehicleColor: VehicleColor
  ): Promise<VehicleColorEntity | null> {
    try {
      const createdVehicleColor = new VehicleColorEntity(
        vehicleColor.name,
        vehicleColor.hex
      );
      return this.repository.save(createdVehicleColor);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async findVehicleColorById(id: number): Promise<VehicleColorEntity | null> {
    try {
      const result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result === null) {
        throw new EntityNotFoundError("Vehicle color entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  findAllVehicleColors(): Promise<VehicleColorEntity[]> {
    try {
      return this.repository.find({
        relations: ["vehicles"],
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateVehicleColorById(
    id: number,
    vehicleColor: VehicleColor
  ): Promise<VehicleColorEntity | null> {
    try {
      let result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result !== null) {
        result.name = vehicleColor.name || result.name;
        result.hex = vehicleColor.hex || result.hex;
        this.repository.save(result);
      } else {
        throw new EntityNotFoundError("Vehicle color entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteVehicleColorById(id: number): Promise<VehicleColorEntity | null> {
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
        throw new EntityNotFoundError("Vehicle color entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
