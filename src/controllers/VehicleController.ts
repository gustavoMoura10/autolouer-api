import { NextFunction, Request, Response } from "express";
import VehicleRepository from "../repositories/VehicleRepository";
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
  async findVehicleById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const vehicle = await this.vehicleRepository.findVehicleById(Number(id));
      return res.status(200).send(vehicle);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllVehicles(req: Request, res: Response, next: NextFunction) {
    try {
      const vehicles = await this.vehicleRepository.findAllVehicles();
      return res.status(200).send(vehicles);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateVehicleById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;
      const {} = <Vehicle>req.body;

      const vehicle = await this.vehicleRepository.updateVehicleById(Number(id), {
       
      });
      return res.status(200).send(vehicle);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteVehicleById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;

      const vehicle = await this.vehicleRepository.deleteVehicleById(Number(id));
      return res.status(200).send(vehicle);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
