import { NextFunction, Request, Response } from "express";
import VehicleFuelRepository from "../repositories/VehicleFuelRepository";
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
  async findVehicleFuelById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const vehicleFuel = await this.vehicleFuelRepository.findVehicleFuelById(Number(id));
      return res.status(200).send(vehicleFuel);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllVehicleFuels(req: Request, res: Response, next: NextFunction) {
    try {
      const vehicleFuels = await this.vehicleFuelRepository.findAllVehicleFuels();
      return res.status(200).send(vehicleFuels);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateVehicleFuelById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;
      const {} = <VehicleFuel>req.body;

      const vehicleFuel = await this.vehicleFuelRepository.updateVehicleFuelById(Number(id), {
       
      });
      return res.status(200).send(vehicleFuel);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteVehicleFuelById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;

      const vehicleFuel = await this.vehicleFuelRepository.deleteVehicleFuelById(Number(id));
      return res.status(200).send(vehicleFuel);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
