import { NextFunction, Request, Response } from "express";
import VehicleModelRepository from "../repositories/VehicleModelRepository";
import UserRepository from "../repositories/UserRepository";
import VehicleModel from "../types/VehicleModel";

export default class VehicleModelController {
  constructor(
    private vehicleModelRepository: VehicleModelRepository,
  ) {}
  async createVehicleModel(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {} = <VehicleModel>req.body;
    
      const vehicleModel = await this.vehicleModelRepository.createVehicleModel({
       
      });
      return res.status(200).send(vehicleModel);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
