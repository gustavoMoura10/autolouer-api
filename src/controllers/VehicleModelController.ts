import { NextFunction, Request, Response } from "express";
import VehicleModelRepository from "../repositories/VehicleModelRepository";
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
  async findVehicleModelById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const vehicleModel = await this.vehicleModelRepository.findVehicleModelById(Number(id));
      return res.status(200).send(vehicleModel);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllVehicleModels(req: Request, res: Response, next: NextFunction) {
    try {
      const vehicleModels = await this.vehicleModelRepository.findAllVehicleModels();
      return res.status(200).send(vehicleModels);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateVehicleModelById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;
      const {} = <VehicleModel>req.body;

      const vehicleModel = await this.vehicleModelRepository.updateVehicleModelById(Number(id), {
       
      });
      return res.status(200).send(vehicleModel);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteVehicleModelById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;

      const vehicleModel = await this.vehicleModelRepository.deleteVehicleModelById(Number(id));
      return res.status(200).send(vehicleModel);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
