import { NextFunction, Request, Response } from "express";
import VehicleCategoryRepository from "../repositories/VehicleCategoryRepository";
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
  async findVehicleCategoryById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const vehicleCategory = await this.vehicleCategoryRepository.findVehicleCategoryById(Number(id));
      return res.status(200).send(vehicleCategory);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllVehicleCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const vehicleCategories = await this.vehicleCategoryRepository.findAllVehicleCategories();
      return res.status(200).send(vehicleCategories);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateVehicleCategoryById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;
      const {} = <VehicleCategory>req.body;

      const vehicleCategory = await this.vehicleCategoryRepository.updateVehicleCategoryById(Number(id), {
       
      });
      return res.status(200).send(vehicleCategory);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteVehicleCategoryById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;

      const vehicleCategory = await this.vehicleCategoryRepository.deleteVehicleCategoryById(Number(id));
      return res.status(200).send(vehicleCategory);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
