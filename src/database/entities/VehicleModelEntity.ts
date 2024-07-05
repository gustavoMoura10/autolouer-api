import { Entity } from "typeorm";

@Entity("vehicle_Model")
export default class VehicleModelEntity {
  id!: number;
}