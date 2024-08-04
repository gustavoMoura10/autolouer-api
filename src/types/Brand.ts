import CountryEntity from "../database/entities/CountryEntity";
import VehicleModelEntity from "../database/entities/VehicleModelEntity";
import Country from "./Country";
import VehicleModel from "./VehicleModel";

type Brand = {
  id: number;
  name: string;
  foundationDate: Date;
  country: Country | CountryEntity | number;
  vehicleModels:VehicleModel[] | VehicleModelEntity[] | null
  bio?: string;
  photo: string | null;
};

export default Brand;
