import { NextFunction, Request, Response } from "express";
import VehicleRepository from "../repositories/VehicleRepository";
import UserRepository from "../repositories/UserRepository";
import Vehicle from "../types/Vehicle";

export default class VehicleController {
  constructor(
    private vehicleRepository: VehicleRepository,
  ) {}
  async createVehicle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {} = <Vehicle>req.body;
    
      const vehicle = await this.vehicleRepository.createVehicle({
       
      });
      return res.status(200).send(vehicle);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
