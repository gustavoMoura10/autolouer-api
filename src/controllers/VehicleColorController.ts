import { NextFunction, Request, Response } from "express";
import VehicleColorRepository from "../repositories/VehicleColorRepository";
import UserRepository from "../repositories/UserRepository";
import VehicleColor from "../types/VehicleColor";

export default class VehicleColorController {
  constructor(
    private vehicleColorRepository: VehicleColorRepository,
  ) {}
  async createVehicleColor(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {} = <VehicleColor>req.body;
    
      const vehicleColor = await this.vehicleColorRepository.createVehicleColor({
       
      });
      return res.status(200).send(vehicleColor);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
