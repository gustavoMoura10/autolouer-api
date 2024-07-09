import { NextFunction, Request, Response } from "express";
import CountryRepository from "../repositories/CountryRepository";
import UserRepository from "../repositories/UserRepository";
import Country from "../types/Country";
import User from "../types/User";
import CountrySchema from "../validator/CountrySchema";

export default class CountryController {
  constructor(private countryRepository: CountryRepository) {}
  async createCountry(req: Request, res: Response, next: NextFunction) {
    try {
      const countrySchema = new CountrySchema();
      await countrySchema.create(req.body);
      const { id } = req.params;
      const { name, code } = <Country>req.body;

      const country = await this.countryRepository.createCountry({
        name,
        code,
      } as Country);
      return res.status(200).send(country);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findCountryById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const country = await this.countryRepository.findCountryById(Number(id));
      return res.status(200).send(country);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllCountries(req: Request, res: Response, next: NextFunction) {
    try {
      const countries = await this.countryRepository.findAllCountries();
      return res.status(200).send(countries);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async updateCountryById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { code, name } = <Country>req.body;

      const country = await this.countryRepository.updateCountryById(
        Number(id),
        {
          code,
          name,
        } as Country
      );
      return res.status(200).send(country);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteCountryById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const country = await this.countryRepository.deleteCountryById(
        Number(id)
      );
      return res.status(200).send(country);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
