import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("vehicle_model")
export default class VehicleModelEntity {
  @PrimaryGeneratedColumn()
  id!: number;
}