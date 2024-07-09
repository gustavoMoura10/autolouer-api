import CountryEntity from "../../database/entities/CountryEntity";
import Country from "../../types/Country";

export default interface InterfaceCountryRepository {
  createCountry(country: Country): Promise<CountryEntity | null> | CountryEntity;
  findCountryById(id: number): Promise<CountryEntity | null> | CountryEntity;
  findAllCountries(): Promise<CountryEntity[]> | CountryEntity[];
  updateCountryById(
    id: number,
    country: Country
  ): Promise<CountryEntity | null> | CountryEntity;
  deleteCountryById(id: number): Promise<CountryEntity | null> | CountryEntity;
}
