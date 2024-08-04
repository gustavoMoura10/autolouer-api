import { Repository } from "typeorm";
import CountryEntity from "../database/entities/CountryEntity";
import Country from "../types/Country";
import InterfaceCountryRepository from "./interfaces/InterfaceCountryRepository";
import { toTitleCase } from "../utils/functions";
import EntityNotFoundError from "../errors/EntityNotFoundError";
import BrandEntity from "../database/entities/BrandEntity";

export default class CountryRepository implements InterfaceCountryRepository {
  private repository: Repository<CountryEntity>;
  constructor(repository: Repository<CountryEntity>) {
    this.repository = repository;
  }
  createCountry(country: Country): Promise<CountryEntity | null> {
    try {
      const createdCountry = new CountryEntity(
        toTitleCase(country.name),
        `${country.code}`.toUpperCase(),
        <BrandEntity[]>country?.brands
      );
      return this.repository.save(createdCountry);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async findCountryById(id: number): Promise<CountryEntity | null> {
    try {
      const result = await this.repository.findOne({
        where: {
          id,
        },
        relations: ["brands"],
      });
      if (result === null) {
        throw new EntityNotFoundError(`Country not found`);
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  findAllCountries(): Promise<CountryEntity[]> | CountryEntity[] {
    try {
      return this.repository.find({
        relations: ["brands"],
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateCountryById(
    id: number,
    country: Country
  ): Promise<CountryEntity | null> {
    try {
      let result = await this.repository.findOne({
        where: {
          id,
        },
      });
      if (result !== null) {
        result.code = country.code || result.code;
        result.name = country.name || result.name;
        result.brands = <BrandEntity[]>country?.brands || result.brands;
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
  async deleteCountryById(id: number): Promise<CountryEntity | null> {
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
        throw new EntityNotFoundError("Country entity not found");
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
