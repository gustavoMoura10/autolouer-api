import { NextFunction, Request, Response } from "express";
import VehicleExchangeRepository from "../repositories/VehicleExchangeRepository";
import UserRepository from "../repositories/UserRepository";
import VehicleExchange from "../types/VehicleExchange";

export default class VehicleExchangeController {
  constructor(
    private vehicleExchangeRepository: VehicleExchangeRepository,
  ) {}
  async createVehicleExchange(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {} = <VehicleExchange>req.body;
    
      const vehicleExchange = await this.vehicleExchangeRepository.createVehicleExchange({
       
      });
      return res.status(200).send(vehicleExchange);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
