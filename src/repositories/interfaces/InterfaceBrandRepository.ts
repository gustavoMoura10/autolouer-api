import BrandEntity from "../../database/entities/BrandEntity";
import Brand from "../../types/Brand";

export default interface InterfaceBrandRepository {
  createBrand(brand: Brand): Promise<BrandEntity | null> | BrandEntity;
  findBrandById(id: number): Promise<BrandEntity | null> | BrandEntity;
  findAllBrands(): Promise<BrandEntity[]> | BrandEntity[];
  updateBrandById(
    id: number,
    brand: Brand
  ): Promise<BrandEntity | null> | BrandEntity;
  deleteBrandById(id: number): Promise<BrandEntity | null> | BrandEntity;
}
