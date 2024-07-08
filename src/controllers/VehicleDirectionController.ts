import { NextFunction, Request, Response } from "express";
import VehicleDirectionRepository from "../repositories/VehicleDirectionRepository";
import UserRepository from "../repositories/UserRepository";
import VehicleDirection from "../types/VehicleDirection";

export default class VehicleDirectionController {
  constructor(
    private vehicleDirectionRepository: VehicleDirectionRepository,
  ) {}
  async createVehicleDirection(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {} = <VehicleDirection>req.body;
    
      const vehicleDirection = await this.vehicleDirectionRepository.createVehicleDirection({
       
      });
      return res.status(200).send(vehicleDirection);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
