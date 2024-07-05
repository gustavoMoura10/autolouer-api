import { Entity } from "typeorm";

@Entity("vehicle_type")
export default class VehicleTypeEntity {
  id!: number;
}
