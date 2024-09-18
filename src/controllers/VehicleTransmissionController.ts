import { NextFunction, Request, Response } from "express";
import VehicleTransmissionRepository from "../repositories/VehicleTransmissionRepository";
import VehicleTransmission from "../types/VehicleTransmission";

export default class VehicleTransmissionController {
  constructor(
    private vehicleTransmissionRepository: VehicleTransmissionRepository
  ) {}
  async createVehicleTransmission(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const { name } = <VehicleTransmission>req.body;

      const vehicleTransmission =
        await this.vehicleTransmissionRepository.createVehicleTransmission({
          name,
        } as VehicleTransmission);
      return res.status(200).send(vehicleTransmission);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findVehicleTransmissionById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;

      const vehicleTransmission =
        await this.vehicleTransmissionRepository.findVehicleTransmissionById(
          Number(id)
        );
      return res.status(200).send(vehicleTransmission);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllVehicleTransmissions(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const vehicleTransmissions =
        await this.vehicleTransmissionRepository.findAllVehicleTransmissions();
      return res.status(200).send(vehicleTransmissions);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateVehicleTransmissionById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const {} = <VehicleTransmission>req.body;

      const vehicleTransmission =
        await this.vehicleTransmissionRepository.updateVehicleTransmissionById(
          Number(id),
          {} as VehicleTransmission
        );
      return res.status(200).send(vehicleTransmission);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteVehicleTransmissionById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;

      const vehicleTransmission =
        await this.vehicleTransmissionRepository.deleteVehicleTransmissionById(
          Number(id)
        );
      return res.status(200).send(vehicleTransmission);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
