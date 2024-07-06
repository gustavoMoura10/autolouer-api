import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("vehicle")
export default class VehicleEntity {
  @PrimaryGeneratedColumn()
  id!: number;
}
