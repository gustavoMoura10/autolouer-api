import VehicleEntity from "../database/entities/VehicleEntity";
import Vehicle from "./Vehicle";

type VehiclePhoto = {
  id: number;
  url: string;
  vehicle: Vehicle | VehicleEntity;
};
export default VehiclePhoto;
