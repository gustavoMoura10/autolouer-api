import { NextFunction, Request, Response } from "express";
import VehiclePhotoRepository from "../repositories/VehiclePhotoRepository";
import UserRepository from "../repositories/UserRepository";
import VehiclePhoto from "../types/VehiclePhoto";

export default class VehiclePhotoController {
  constructor(
    private vehiclePhotoRepository: VehiclePhotoRepository,
  ) {}
  async createVehiclePhoto(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {} = <VehiclePhoto>req.body;
    
      const vehiclePhoto = await this.vehiclePhotoRepository.createVehiclePhoto({
       
      });
      return res.status(200).send(vehiclePhoto);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
