import { NextFunction, Request, Response } from "express";
import VehicleExchangeRepository from "../repositories/VehicleExchangeRepository";
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
  async findVehicleExchangeById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const vehicleExchange = await this.vehicleExchangeRepository.findVehicleExchangeById(Number(id));
      return res.status(200).send(vehicleExchange);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllVehicleExchanges(req: Request, res: Response, next: NextFunction) {
    try {
      const vehicleExchanges = await this.vehicleExchangeRepository.findAllVehicleExchanges();
      return res.status(200).send(vehicleExchanges);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateVehicleExchangeById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;
      const {} = <VehicleExchange>req.body;

      const vehicleExchange = await this.vehicleExchangeRepository.updateVehicleExchangeById(Number(id), {
       
      });
      return res.status(200).send(vehicleExchange);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteVehicleExchangeById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;

      const vehicleExchange = await this.vehicleExchangeRepository.deleteVehicleExchangeById(Number(id));
      return res.status(200).send(vehicleExchange);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
