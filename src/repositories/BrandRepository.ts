import { Repository } from "typeorm";
import BrandEntity from "../database/entities/BrandEntity";
import Brand from "../types/Brand";
import InterfaceBrandRepository from "./interfaces/InterfaceBrandRepository";
import CountryEntity from "../database/entities/CountryEntity";

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
  updateBrandById(
    id: number,
    brand: Brand
  ): Promise<BrandEntity | null> | BrandEntity {
    throw new Error("Method not implemented.");
  }
  deleteBrandById(id: number): Promise<BrandEntity | null> | BrandEntity {
    throw new Error("Method not implemented.");
  }
}
