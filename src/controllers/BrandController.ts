import { NextFunction, Request, Response } from "express";
import BrandRepository from "../repositories/BrandRepository";
import Brand from "../types/Brand";
import CountryRepository from "../repositories/CountryRepository";

export default class BrandController {
  constructor(
    private brandRepository: BrandRepository,
    private countryRepository: CountryRepository
  ) {}
  async createBrand(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { country, foundationDate, name, bio, photo } = <Brand>req.body;
      const idCountry = typeof country === "number" ? country : country?.id;
      const countryEntity = await this.countryRepository.findCountryById(
        idCountry
      );
      const brand = await this.brandRepository.createBrand({
        country: countryEntity,
        foundationDate,
        name,
        bio,
        photo,
      } as Brand);
      return res.status(200).send(brand);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findBrandById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const brand = await this.brandRepository.findBrandById(Number(id));
      return res.status(200).send(brand);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllBrands(req: Request, res: Response, next: NextFunction) {
    try {
      const brands = await this.brandRepository.findAllBrands();
      return res.status(200).send(brands);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateBrandById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { country, foundationDate, name, bio, photo } = <Brand>req.body;

      const brand = await this.brandRepository.updateBrandById(Number(id), {
        country,
        foundationDate,
        name,
        bio,
        photo,
      } as Brand);
      return res.status(200).send(brand);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteBrandById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const brand = await this.brandRepository.deleteBrandById(Number(id));
      return res.status(200).send(brand);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
