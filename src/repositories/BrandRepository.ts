import { Repository } from "typeorm";
import BrandEntity from "../database/entities/BrandEntity";
import Brand from "../types/Brand";
import InterfaceBrandRepository from "./interfaces/InterfaceBrandRepository";

export default class BrandRepository implements InterfaceBrandRepository {
  private repository: Repository<BrandEntity>;
  constructor(repository: Repository<BrandEntity>) {
    this.repository = repository;
  }
  createBrand(brand: Brand): Promise<BrandEntity | null> | BrandEntity {
    throw new Error("Method not implemented.");
  }
  findBrandById(id: number): Promise<BrandEntity | null> | BrandEntity {
    throw new Error("Method not implemented.");
  }
  findAllBrands(): Promise<BrandEntity[]> | BrandEntity[] {
    throw new Error("Method not implemented.");
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
