import { NextFunction, Request, Response } from "express";
import VehicleRentRepository from "../repositories/VehicleRentRepository";
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
  async findVehicleRentById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const vehicleRent = await this.vehicleRentRepository.findVehicleRentById(Number(id));
      return res.status(200).send(vehicleRent);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllVehicleRents(req: Request, res: Response, next: NextFunction) {
    try {
      const vehicleRents = await this.vehicleRentRepository.findAllVehicleRents();
      return res.status(200).send(vehicleRents);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateVehicleRentById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;
      const {} = <VehicleRent>req.body;

      const vehicleRent = await this.vehicleRentRepository.updateVehicleRentById(Number(id), {
       
      });
      return res.status(200).send(vehicleRent);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteVehicleRentById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;

      const vehicleRent = await this.vehicleRentRepository.deleteVehicleRentById(Number(id));
      return res.status(200).send(vehicleRent);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
