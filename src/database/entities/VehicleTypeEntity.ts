import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("vehicle_type")
export default class VehicleTypeEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  
}
