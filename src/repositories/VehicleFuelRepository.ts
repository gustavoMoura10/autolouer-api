import { Repository } from "typeorm";
import VehicleFuelEntity from "../database/entities/VehicleFuelEntity";
import VehicleFuel from "../types/VehicleFuel";
import InterfaceVehicleFuelRepository from "./interfaces/InterfaceVehicleFuelRepository";
import EntityNotFoundError from "../errors/EntityNotFoundError";

export default class VehicleFuelRepository
  implements InterfaceVehicleFuelRepository
{
  private repository: Repository<VehicleFuelEntity>;
  constructor(repository: Repository<VehicleFuelEntity>) {
    this.repository = repository;
  }
  createVehicleFuel(
    vehicleFuel: VehicleFuel
  ): Promise<VehicleFuelEntity | null> {
    try {
      const createdVehicleFuel = new VehicleFuelEntity(vehicleFuel.name);
      return this.repository.save(createdVehicleFuel);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async findVehicleFuelById(id: number): Promise<VehicleFuelEntity | null> {
    try {
      const result = await this.repository.findOne({
        where: {
          id,
        },
        relations: ["vehicles"],
      });
      if (result === null) {
        throw new EntityNotFoundError("Vehicle fuel entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  findAllVehicleFuels(): Promise<VehicleFuelEntity[]> {
    try {
      return this.repository.find({
        relations: ["vehicles"],
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateVehicleFuelById(
    id: number,
    vehicleFuel: VehicleFuel
  ): Promise<VehicleFuelEntity | null> {
    try {
      let result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result !== null) {
        result.name = vehicleFuel.name || result.name;
        this.repository.save(result);
      } else {
        throw new EntityNotFoundError("Vehicle fuel entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteVehicleFuelById(id: number): Promise<VehicleFuelEntity | null> {
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
        throw new EntityNotFoundError("Vehicle fuel entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
