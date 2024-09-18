import { NextFunction, Request, Response } from "express";
import VehicleTypeRepository from "../repositories/VehicleTypeRepository";
import VehicleType from "../types/VehicleType";
import CountryRepository from "../repositories/CountryRepository";
import Country from "../types/Country";

export default class VehicleTypeController {
  constructor(
    private vehicleTypeRepository: VehicleTypeRepository,
    private countryRepository: CountryRepository
  ) {}
  async createVehicleType(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { country, name } = <VehicleType>req.body;
      const idCountry = typeof country === "number" ? country : country?.id;
      const countryEntity = await this.countryRepository.findCountryById(
        idCountry
      );
      const vehicleType = await this.vehicleTypeRepository.createVehicleType({
        country: countryEntity,
        name,
      } as VehicleType);
      return res.status(200).send(vehicleType);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findVehicleTypeById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const vehicleType = await this.vehicleTypeRepository.findVehicleTypeById(
        Number(id)
      );
      return res.status(200).send(vehicleType);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllVehicleTypes(req: Request, res: Response, next: NextFunction) {
    try {
      const vehicleTypes =
        await this.vehicleTypeRepository.findAllVehicleTypes();
      return res.status(200).send(vehicleTypes);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateVehicleTypeById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { country, name, vehicleModels } = <VehicleType>req.body;

      const vehicleType =
        await this.vehicleTypeRepository.updateVehicleTypeById(Number(id), {
          country,
          name,
          vehicleModels,
        });
      return res.status(200).send(vehicleType);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteVehicleTypeById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const vehicleType =
        await this.vehicleTypeRepository.deleteVehicleTypeById(Number(id));
      return res.status(200).send(vehicleType);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
