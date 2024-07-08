import { NextFunction, Request, Response } from "express";
import VehicleCategoryRepository from "../repositories/VehicleCategoryRepository";
import UserRepository from "../repositories/UserRepository";
import VehicleCategory from "../types/VehicleCategory";

export default class VehicleCategoryController {
  constructor(
    private vehicleCategoryRepository: VehicleCategoryRepository,
  ) {}
  async createVehicleCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {} = <VehicleCategory>req.body;
    
      const vehicleCategory = await this.vehicleCategoryRepository.createVehicleCategory({
       
      });
      return res.status(200).send(vehicleCategory);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
