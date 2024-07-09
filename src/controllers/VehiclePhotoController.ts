import { NextFunction, Request, Response } from "express";
import VehiclePhotoRepository from "../repositories/VehiclePhotoRepository";
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
  async findVehiclePhotoById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const vehiclePhoto = await this.vehiclePhotoRepository.findVehiclePhotoById(Number(id));
      return res.status(200).send(vehiclePhoto);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllVehiclePhotos(req: Request, res: Response, next: NextFunction) {
    try {
      const vehiclePhotos = await this.vehiclePhotoRepository.findAllVehiclePhotos();
      return res.status(200).send(vehiclePhotos);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateVehiclePhotoById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;
      const {} = <VehiclePhoto>req.body;

      const vehiclePhoto = await this.vehiclePhotoRepository.updateVehiclePhotoById(Number(id), {
       
      });
      return res.status(200).send(vehiclePhoto);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteVehiclePhotoById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;

      const vehiclePhoto = await this.vehiclePhotoRepository.deleteVehiclePhotoById(Number(id));
      return res.status(200).send(vehiclePhoto);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
