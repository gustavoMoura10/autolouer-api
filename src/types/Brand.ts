import CountryEntity from "../database/entities/CountryEntity";
import Country from "./Country";

type Brand = {
  id: number;
  name: string;
  foundationDate: Date;
  country: Country | CountryEntity | number;
  bio?: string;
  photo: string | unknown;
};

export default Brand;
