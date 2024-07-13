import CountryEntity from "../database/entities/CountryEntity";
import Country from "./Country";

type VehicleType = {
  id?: number;
  name: string;
  country: Country | CountryEntity | number;
};
export default VehicleType;
