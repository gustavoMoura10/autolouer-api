import { NextFunction, Request, Response } from "express";
import VehicleTypeRepository from "../repositories/VehicleTypeRepository";
import UserRepository from "../repositories/UserRepository";
import VehicleType from "../types/VehicleType";

export default class VehicleTypeController {
  constructor(
    private vehicleTypeRepository: VehicleTypeRepository,
  ) {}
  async createVehicleType(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {} = <VehicleType>req.body;
    
      const vehicleType = await this.vehicleTypeRepository.createVehicleType({
       
      });
      return res.status(200).send(vehicleType);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
