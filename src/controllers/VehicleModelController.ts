import { NextFunction, Request, Response } from "express";
import VehicleModelRepository from "../repositories/VehicleModelRepository";
import VehicleModel from "../types/VehicleModel";
import VehicleTypeEntity from "../database/entities/VehicleTypeEntity";
import BrandRepository from "../repositories/BrandRepository";
import VehicleTypeRepository from "../repositories/VehicleTypeRepository";

export default class VehicleModelController {
  constructor(
    private vehicleModelRepository: VehicleModelRepository,
    private brandRepository: BrandRepository,
    private vehicleTypeRepository: VehicleTypeRepository
  ) {}
  async createVehicleModel(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { brand, name, vehicleTypes, bio, photo } = <VehicleModel>req.body;
      const vehicleTypeEntities: VehicleTypeEntity[] = [];
      for (let vehicleType of vehicleTypes) {
        const idVehicleType =
          typeof vehicleType == "number" ? vehicleType : vehicleType.id;
        const vehicleTypeEntity =
          await this.vehicleTypeRepository.findVehicleTypeById(
            Number(idVehicleType)
          );
        if (vehicleTypeEntity) vehicleTypeEntities.push(vehicleTypeEntity);
      }
      const idBrand = typeof brand == "number" ? brand : brand.id;
      const brandEntity = await this.brandRepository.findBrandById(Number(idBrand));
      const vehicleModel = await this.vehicleModelRepository.createVehicleModel(
        {
          brand: brandEntity,
          name,
          vehicleTypes: vehicleTypeEntities,
          bio,
          photo,
        } as VehicleModel
      );
      return res.status(200).send(vehicleModel);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findVehicleModelById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const vehicleModel =
        await this.vehicleModelRepository.findVehicleModelById(Number(id));
      return res.status(200).send(vehicleModel);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllVehicleModels(req: Request, res: Response, next: NextFunction) {
    try {
      const vehicleModels =
        await this.vehicleModelRepository.findAllVehicleModels();
      return res.status(200).send(vehicleModels);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateVehicleModelById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const {} = <VehicleModel>req.body;

      const vehicleModel =
        await this.vehicleModelRepository.updateVehicleModelById(
          Number(id),
          {} as VehicleModel
        );
      return res.status(200).send(vehicleModel);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteVehicleModelById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;

      const vehicleModel =
        await this.vehicleModelRepository.deleteVehicleModelById(Number(id));
      return res.status(200).send(vehicleModel);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
