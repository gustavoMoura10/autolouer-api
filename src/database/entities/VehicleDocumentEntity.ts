import { Entity } from "typeorm";

@Entity("vehicle_document")
export default class VehicleEntity {
  id!: number;
}
