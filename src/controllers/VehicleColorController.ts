import { NextFunction, Request, Response } from "express";
import VehicleColorRepository from "../repositories/VehicleColorRepository";
import VehicleColor from "../types/VehicleColor";

export default class VehicleColorController {
  constructor(private vehicleColorRepository: VehicleColorRepository) {}
  async createVehicleColor(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {} = <VehicleColor>req.body;

      const vehicleColor = await this.vehicleColorRepository.createVehicleColor(
        {} as VehicleColor
      );
      return res.status(200).send(vehicleColor);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findVehicleColorById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const vehicleColor =
        await this.vehicleColorRepository.findVehicleColorById(Number(id));
      return res.status(200).send(vehicleColor);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllVehicleColors(req: Request, res: Response, next: NextFunction) {
    try {
      const vehicleColors =
        await this.vehicleColorRepository.findAllVehicleColors();
      return res.status(200).send(vehicleColors);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateVehicleColorById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const {} = <VehicleColor>req.body;

      const vehicleColor =
        await this.vehicleColorRepository.updateVehicleColorById(
          Number(id),
          {} as VehicleColor
        );
      return res.status(200).send(vehicleColor);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteVehicleColorById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;

      const vehicleColor =
        await this.vehicleColorRepository.deleteVehicleColorById(Number(id));
      return res.status(200).send(vehicleColor);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
