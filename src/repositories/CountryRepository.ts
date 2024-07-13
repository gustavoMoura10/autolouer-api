import { Repository } from "typeorm";
import CountryEntity from "../database/entities/CountryEntity";
import Country from "../types/Country";
import InterfaceCountryRepository from "./interfaces/InterfaceCountryRepository";
import { toTitleCase } from "../utils/functions";
import EntityNotFoundError from "../errors/EntityNotFoundError";

export default class CountryRepository implements InterfaceCountryRepository {
  private repository: Repository<CountryEntity>;
  constructor(repository: Repository<CountryEntity>) {
    this.repository = repository;
  }
  createCountry(
    country: Country
  ): Promise<CountryEntity | null> | CountryEntity {
    try {
      const createdCountry = new CountryEntity(
        toTitleCase(country.name),
        `${country.code}`.toUpperCase()
      );
      return this.repository.save(country);
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
  updateCountryById(
    id: number,
    country: Country
  ): Promise<CountryEntity | null> | CountryEntity {
    throw new Error("Method not implemented.");
  }
  deleteCountryById(id: number): Promise<CountryEntity | null> | CountryEntity {
    throw new Error("Method not implemented.");
  }
}
