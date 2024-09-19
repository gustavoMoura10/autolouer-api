import CountryEntity from "../database/entities/CountryEntity";
import VehicleModelEntity from "../database/entities/VehicleModelEntity";
import Country from "./Country";
import VehicleModel from "./VehicleModel";

type VehicleType = {
  id?: number;
  name: string;
  vehicleModels: VehicleModel[] | VehicleModelEntity[] | null;
};
export default VehicleType;
