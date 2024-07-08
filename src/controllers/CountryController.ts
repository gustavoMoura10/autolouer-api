import { NextFunction, Request, Response } from "express";
import CountryRepository from "../repositories/CountryRepository";
import UserRepository from "../repositories/UserRepository";
import Country from "../types/Country";
import User from "../types/User";

export default class CountryController {
  constructor(
    private countryRepository: CountryRepository,
  ) {}
  async createCountry(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {} = <Country>req.body;
    
      const country = await this.countryRepository.createCountry({
       
      });
      return res.status(200).send(country);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
