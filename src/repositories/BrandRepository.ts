import BrandEntity from "../database/entities/BrandEntity";
import Brand from "../types/Brand";
import InterfaceBrandRepository from "./interfaces/InterfaceBrandRepository";

export default class BrandRepository implements InterfaceBrandRepository {
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
