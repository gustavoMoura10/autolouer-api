import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("vehicle_document")
export default class VehicleEntity {
  @PrimaryGeneratedColumn()
  id!: number;
}
