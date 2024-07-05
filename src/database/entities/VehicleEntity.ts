import { Entity } from "typeorm";

@Entity("vehicle")
export default class VehicleEntity {
  id!: number;
}
