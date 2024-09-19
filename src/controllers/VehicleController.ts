import { NextFunction, Request, Response } from "express";
import VehicleRepository from "../repositories/VehicleRepository";
import Vehicle from "../types/Vehicle";
import VehicleCategoryRepository from "../repositories/VehicleCategoryRepository";
import VehicleColorRepository from "../repositories/VehicleColorRepository";
import VehicleDirectionRepository from "../repositories/VehicleDirectionRepository";
import VehicleFuelRepository from "../repositories/VehicleFuelRepository";
import VehicleTransmissionRepository from "../repositories/VehicleTransmissionRepository";
import VehiclePhotoRepository from "../repositories/VehiclePhotoRepository";
import VehicleModelRepository from "../repositories/VehicleModelRepository";
import VehiclePhoto from "../types/VehiclePhoto";

export default class VehicleController {
  constructor(
    private vehicleRepository: VehicleRepository,
    private vehicleCategoryRepository: VehicleCategoryRepository,
    private vehicleColorRepository: VehicleColorRepository,
    private vehicleDirectionRepository: VehicleDirectionRepository,
    private vehicleFuelRepository: VehicleFuelRepository,
    private vehicleModelRepository: VehicleModelRepository,
    private vehicleTransmissionRepository: VehicleTransmissionRepository,
    private vehiclePhotoRepository: VehiclePhotoRepository
  ) {}
  private async findRelations(
    vehicleCategory: any,
    vehicleDirection: any,
    vehicleColor: any,
    vehicleFuel: any,
    vehicleModel: any,
    vehicleTransmission: any
  ) {
    const idVehicleCategory =
      typeof vehicleCategory === "number"
        ? vehicleCategory
        : vehicleCategory?.id;

    const vehicleCategoryEntity =
      await this.vehicleCategoryRepository.findVehicleCategoryById(
        idVehicleCategory
      );

    const idVehicleColor =
      typeof vehicleCategory === "number"
        ? vehicleCategory
        : vehicleCategory?.id;

    const vehicleColorEntity =
      await this.vehicleColorRepository.findVehicleColorById(idVehicleColor);

    const idVehicleDirection =
      typeof vehicleDirection === "number"
        ? vehicleDirection
        : vehicleDirection?.id;

    const vehicleDirectionEntity =
      await this.vehicleDirectionRepository.findVehicleDirectionById(
        idVehicleDirection
      );

    const idVehicleFuel =
      typeof vehicleFuel === "number" ? vehicleFuel : vehicleFuel?.id;

    const vehicleFuelEntity =
      await this.vehicleFuelRepository.findVehicleFuelById(idVehicleFuel);

    const idVehicleModel =
      typeof vehicleModel === "number" ? vehicleModel : vehicleModel?.id;

    const vehicleModelEntity =
      await this.vehicleModelRepository.findVehicleModelById(idVehicleModel);

    const idVehicleTransmission =
      typeof vehicleTransmission === "number"
        ? vehicleTransmission
        : vehicleTransmission?.id;

    const vehicleTransmissionEntity =
      await this.vehicleTransmissionRepository.findVehicleTransmissionById(
        idVehicleTransmission
      );
    return {
      vehicleCategoryEntity,
      vehicleModelEntity,
      vehicleColorEntity,
      vehicleFuelEntity,
      vehicleTransmissionEntity,
      vehicleDirectionEntity,
    };
  }
  async createVehicle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {
        year,
        description,
        doors,
        mileage,
        motorPower,
        vehicleCategory,
        vehicleColor,
        vehicleDirection,
        vehicleFuel,
        vehicleModel,
        vehiclePlate,
        vehicleTransmission,
        vehiclePhotos,
      } = <Vehicle>req.body;
      const {
        vehicleCategoryEntity,
        vehicleModelEntity,
        vehicleColorEntity,
        vehicleFuelEntity,
        vehicleTransmissionEntity,
        vehicleDirectionEntity,
      } = await this.findRelations(
        vehicleCategory,
        vehicleDirection,
        vehicleColor,
        vehicleFuel,
        vehicleModel,
        vehicleTransmission
      );
      const vehicle = await this.vehicleRepository.createVehicle({
        year,
        description,
        doors,
        mileage,
        motorPower,
        vehicleCategory: vehicleCategoryEntity,
        vehicleColor: vehicleColorEntity,
        vehicleDirection: vehicleDirectionEntity,
        vehicleFuel: vehicleFuelEntity,
        vehicleModel: vehicleModelEntity,
        vehiclePlate,
        vehicleTransmission: vehicleTransmissionEntity,
        vehiclePhotos,
      } as Vehicle);
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
  async updateVehicleById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {
        year,
        description,
        doors,
        mileage,
        motorPower,
        vehicleCategory,
        vehicleColor,
        vehicleDirection,
        vehicleFuel,
        vehicleModel,
        vehiclePlate,
        vehicleTransmission,
        vehiclePhotos,
      } = <Vehicle>req.body;
      const {
        vehicleCategoryEntity,
        vehicleModelEntity,
        vehicleColorEntity,
        vehicleFuelEntity,
        vehicleTransmissionEntity,
        vehicleDirectionEntity,
      } = await this.findRelations(
        vehicleCategory,
        vehicleDirection,
        vehicleColor,
        vehicleFuel,
        vehicleModel,
        vehicleTransmission
      );
      const vehicle = await this.vehicleRepository.updateVehicleById(
        Number(id),
        {
          year,
          description,
          doors,
          mileage,
          motorPower,
          vehicleCategory: vehicleCategoryEntity,
          vehicleColor: vehicleColorEntity,
          vehicleDirection: vehicleDirectionEntity,
          vehicleFuel: vehicleFuelEntity,
          vehicleModel: vehicleModelEntity,
          vehiclePlate,
          vehicleTransmission: vehicleTransmissionEntity,
          vehiclePhotos,
        } as Vehicle
      );
      return res.status(200).send(vehicle);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteVehicleById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const vehicle = await this.vehicleRepository.deleteVehicleById(
        Number(id)
      );
      return res.status(200).send(vehicle);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
