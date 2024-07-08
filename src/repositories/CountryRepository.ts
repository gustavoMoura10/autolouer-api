import { Repository } from "typeorm";
import CountryEntity from "../database/entities/CountryEntity";
import Country from "../types/Country";
import InterfaceCountryRepository from "./interfaces/InterfaceCountryRepository";

export default class CountryRepository implements InterfaceCountryRepository {
  private repository: Repository<CountryEntity>;
  constructor(repository: Repository<CountryEntity>) {
    this.repository = repository;
  }
  createCountry(country: Country): Promise<CountryEntity | null> | CountryEntity {
    throw new Error("Method not implemented.");
  }
  findCountryById(id: number): Promise<CountryEntity | null> | CountryEntity {
    throw new Error("Method not implemented.");
  }
  findAllCountrys(): Promise<CountryEntity[]> | CountryEntity[] {
    throw new Error("Method not implemented.");
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
