import { Repository } from "typeorm";
import BrandEntity from "../database/entities/BrandEntity";
import Brand from "../types/Brand";
import InterfaceBrandRepository from "./interfaces/InterfaceBrandRepository";
import CountryEntity from "../database/entities/CountryEntity";
import EntityNotFoundError from "../errors/EntityNotFoundError";
import VehicleModel from "../types/VehicleModel";
import VehicleModelEntity from "../database/entities/VehicleModelEntity";

export default class BrandRepository implements InterfaceBrandRepository {
  private repository: Repository<BrandEntity>;
  constructor(repository: Repository<BrandEntity>) {
    this.repository = repository;
  }
  createBrand(brand: Brand): Promise<BrandEntity | null> | BrandEntity {
    try {
      const createdBrand = new BrandEntity(
        brand.name,
        brand.foundationDate,
        <CountryEntity>brand.country
      );
      return this.repository.save(createdBrand);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  findBrandById(id: number): Promise<BrandEntity | null> | BrandEntity {
    try {
      return this.repository.findOne({
        where: {
          id,
        },
        relations: ["country"],
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  findAllBrands(): Promise<BrandEntity[]> | BrandEntity[] {
    try {
      return this.repository.find({
        relations: ["country"],
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateBrandById(id: number, brand: Brand): Promise<BrandEntity | null> {
    try {
      let result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result !== null) {
        result.name = brand.name || result.name;
        result.bio = brand.bio || result.bio;
        result.foundationDate = brand.foundationDate || result.foundationDate;
        result.photo = brand.photo || result.photo;
        result.vehicleModels =
          <VehicleModelEntity[]>brand.vehicleModels || result.vehicleModels;
        result.country = <CountryEntity>brand.country || result.country;
        this.repository.save(result);
      } else {
        throw new EntityNotFoundError("Country entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteBrandById(id: number): Promise<BrandEntity | null> {
    try {
      const result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result !== null) {
        result.deletedAt = new Date();
        await this.repository.save(result);
      } else {
        throw new EntityNotFoundError("User entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
