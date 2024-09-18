import { NextFunction, Request, Response } from "express";
import VehicleDirectionRepository from "../repositories/VehicleDirectionRepository";
import VehicleDirection from "../types/VehicleDirection";

export default class VehicleDirectionController {
  constructor(private vehicleDirectionRepository: VehicleDirectionRepository) {}
  async createVehicleDirection(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const { name } = <VehicleDirection>req.body;

      const vehicleDirection =
        await this.vehicleDirectionRepository.createVehicleDirection({
          name,
        } as VehicleDirection);
      return res.status(200).send(vehicleDirection);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findVehicleDirectionById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;

      const vehicleDirection =
        await this.vehicleDirectionRepository.findVehicleDirectionById(
          Number(id)
        );
      return res.status(200).send(vehicleDirection);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllVehicleDirections(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const vehicleDirections =
        await this.vehicleDirectionRepository.findAllVehicleDirections();
      return res.status(200).send(vehicleDirections);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateVehicleDirectionById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const {} = <VehicleDirection>req.body;

      const vehicleDirection =
        await this.vehicleDirectionRepository.updateVehicleDirectionById(
          Number(id),
          {} as VehicleDirection
        );
      return res.status(200).send(vehicleDirection);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteVehicleDirectionById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;

      const vehicleDirection =
        await this.vehicleDirectionRepository.deleteVehicleDirectionById(
          Number(id)
        );
      return res.status(200).send(vehicleDirection);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
