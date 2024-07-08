import { NextFunction, Request, Response } from "express";
import VehicleRentRepository from "../repositories/VehicleRentRepository";
import UserRepository from "../repositories/UserRepository";
import VehicleRent from "../types/VehicleRent";

export default class VehicleRentController {
  constructor(
    private vehicleRentRepository: VehicleRentRepository,
  ) {}
  async createVehicleRent(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {} = <VehicleRent>req.body;
    
      const vehicleRent = await this.vehicleRentRepository.createVehicleRent({
       
      });
      return res.status(200).send(vehicleRent);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
