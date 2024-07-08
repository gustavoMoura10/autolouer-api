import { NextFunction, Request, Response } from "express";
import VehicleFuelRepository from "../repositories/VehicleFuelRepository";
import UserRepository from "../repositories/UserRepository";
import VehicleFuel from "../types/VehicleFuel";

export default class VehicleFuelController {
  constructor(
    private vehicleFuelRepository: VehicleFuelRepository,
  ) {}
  async createVehicleFuel(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {} = <VehicleFuel>req.body;
    
      const vehicleFuel = await this.vehicleFuelRepository.createVehicleFuel({
       
      });
      return res.status(200).send(vehicleFuel);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
