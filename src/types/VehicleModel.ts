import BrandEntity from "../database/entities/BrandEntity";
import VehicleTypeEntity from "../database/entities/VehicleTypeEntity";
import Brand from "./Brand";
import VehicleType from "./VehicleType";

type VehicleModel = {
  id: number;
  name: string;
  bio?: string;
  photo?: string;
  brand: Brand | BrandEntity | number;
  vehicleTypes: VehicleType[] | VehicleTypeEntity[] | number[];
};
export default VehicleModel;
